import type { PartyLeaderModel } from "./PartyLeaderModel.ts";
import type { PartyMemberModel } from "./PartyMemberModel.ts";

 export type PartyModel = {
    /**
     * @type string
    */
    id: string;
    /**
     * @type string
    */
    name: string;
    /**
     * @type string
    */
    shorthand: string;
    /**
     * @type string
    */
    color: string;
    /**
     * @type array
    */
    members: PartyMemberModel[];
    leader: (PartyLeaderModel | null);
};