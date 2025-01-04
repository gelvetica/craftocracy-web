import type { PartyMemberModel } from "./PartyMemberModel.ts";

 export type ElectionModel = {
    /**
     * @type array
    */
    voters: PartyMemberModel[];
    /**
     * @type integer
    */
    votes_cast: number;
};