'use client'
import {useParams} from "next/navigation";
import {PollWithResultsModel, useGetPollResultsPollsPollIdResultsGet, ElectionChoice, TextChoice, StarResults} from "@/lib/client";
import React from "react";
import { flavors} from "@catppuccin/palette";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend, Chart,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ChartDataLabels
);

type ChoiceMap = Record<string, ElectionChoice | TextChoice>;
function convertChoicesToMap(
    choices: Array<ElectionChoice | TextChoice>
): ChoiceMap {
    return choices.reduce((acc, choice) => {
        // @ts-expect-error this will never be undefined
        acc[choice._id] = choice;
        return acc;
    }, {} as ChoiceMap);
}

function ToLabel(key: string, choices: ChoiceMap) {
    const choice = choices[key];
    if ("text" in choice) {return choice.text}
    else if ("candidate" in choice) {return choice.candidate.name}

}


Chart.defaults.color = flavors.macchiato.colors.text.hex;

function percentage(partialValue: number, totalValue: number) {
    return (100 * partialValue) / totalValue;
}

function MatchupComponent(choice_a: string, choice_b: string, results: StarResults, choices: ChoiceMap) {
    const matchup = results.preference_matrix[choice_a][choice_b]
    const total = matchup.win + matchup.tie + matchup.lose
    const percentages = {
        win: percentage(matchup.win, total),
        tie: percentage(matchup.tie, total),
        lose: percentage(matchup.lose, total)
    }
    return (
        <div className="bg-surface0 rounded-2xl p-2">
            <div className="flex justify-between mb-1">
                <span className="font-xl">{ToLabel(choice_a, choices)} - {matchup.win}</span>
                <span className="font-xl">- {matchup.tie} -</span>
                <span className="font-xl">{matchup.lose} - {ToLabel(choice_b, choices)}</span>
            </div>
            <div className="w-full bg-surface1 rounded-full h-5 flex">
                <div className="font-medium p-0.5 bg-green leading-none text-surface0 h-full rounded-l-full text-center" style={{width: percentages.win + "%"}}>{percentages.win.toFixed(2)}%</div>
                <div className="font-medium p-0.5 leading-none h-full text-center text-text" style={{width: percentages.tie + "%"}}>{percentages.tie.toFixed(2)}%</div>
                <div className="font-medium p-0.5 bg-red leading-none text-surface0 h-full rounded-r-full text-center" style={{width: percentages.lose + "%"}}>{percentages.lose.toFixed(2)}%</div>
            </div>
        </div>
    )
}

function HighlightedRacesComponent(results: StarResults, choices: ChoiceMap) {
    if (results.highlighted_races?.length === 0) {
        return <div></div>
    } else return (
        <div className="space-y-4">{results.highlighted_races?.map(race => {
            return <div key={race.toString()}>{MatchupComponent(race[0], race[1], results, choices)}</div>;
        })}</div>
    )
}

function PreferenceMatrixComponent(results: StarResults, choices: ChoiceMap) {
    return (
        <Tabs>
            <TabList>
                {Object.keys(results.total_scores).map(choice => {
                    return (<Tab key={choice}>{ToLabel(choice, choices)}</Tab>)
                })}
            </TabList>
            {Object.keys(results.total_scores).map(choice => {
                return (
                    <TabPanel key={choice}>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            {Object.keys(results.preference_matrix[choice]).map(matchup => {
                                return (<div key={matchup}>
                                    {MatchupComponent(choice, matchup, results, choices)}
                                </div>)
                            })}
                        </div>
                    </TabPanel>
                )
            })}
        </Tabs>
    )
}

function StarResultsComponent(poll: PollWithResultsModel) {
    const indexed_choices = convertChoicesToMap(poll.choices);

    if (poll.results.data?.results_type == "star") {
        const options = {
            indexAxis: 'y' as const,
            elements: {
                bar: {
                    borderWidth: 0,
                },
            },
            scales: {
                x: {
                    ticks: {
                        color: flavors.macchiato.colors.text.hex
                    }
                }
            },
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false,
                },
                title: {
                    display: true,
                    text: 'Total Scores',
                },
                datalabels: {
                    anchor: "end",
                    align: "left",
                    font: {
                        weight: "bolder",
                        size: 24,
                    }
                }
            },
        };
        const data = {
            labels: Object.keys(poll.results.data.total_scores).map(key => ToLabel(key, indexed_choices)),
            datasets: [
                {
                    data: Object.values(poll.results.data.total_scores),
                    backgroundColor: flavors.macchiato.colors.surface0.hex
                }
            ]
        }

        return (<div>
            <div className="chart-container relative w-full" style={{height: "40rem"}}><Bar options={options} data={data} /></div>
            {HighlightedRacesComponent(poll.results.data, indexed_choices)}
            <br/>
            {PreferenceMatrixComponent(poll.results.data, indexed_choices)}
        </div>)
    }
}

function ResultsComponent(poll: PollWithResultsModel) {
    if (poll.results.data) {
        // @ts-expect-error CHOOSE ONE NOT IMPLEMENTED YET
        if (poll.results.data.results_type === "choose-one") return (
            <div>lol</div>
        ); else if (poll.results.data.results_type === "star") return (
            <div>{StarResultsComponent(poll)}</div>
        )
    }
}

export default function PollPage() {
    const params = useParams<{ poll: string }>()

    const {data: poll} = useGetPollResultsPollsPollIdResultsGet((params.poll))
    if (poll) return (
        <div>
            <div className="text-2xl">{poll.title}</div>
            {ResultsComponent(poll)}
        </div>
    )
}