export const registrationModelPronounsEnum = {
    "they": "they",
    "she": "she",
    "he": "he",
    "it": "it",
    "was": "was"
} as const;

 export type RegistrationModelPronounsEnum = (typeof registrationModelPronounsEnum)[keyof typeof registrationModelPronounsEnum];

 export type RegistrationModel = {
    /**
     * @type string
    */
    name: string;
    /**
     * @type string
    */
    pronouns: RegistrationModelPronounsEnum;
};