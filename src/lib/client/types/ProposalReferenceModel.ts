import type { UserModel } from "./UserModel.ts";

 export type ProposalReferenceModel = {
    /**
     * @type string
    */
    id: string;
    /**
     * @type string
    */
    title: string;
    /**
     * @type object
    */
    author: UserModel;
    /**
     * @type boolean
    */
    invalid: boolean;
};