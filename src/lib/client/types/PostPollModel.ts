import type { PollChoice } from "./PollChoice.ts";

 export type PostPollModel = {
    /**
     * @type string
    */
    title: string;
    /**
     * @type array
    */
    choices: PollChoice[];
    /**
     * @type integer
    */
    proposal: number;
};