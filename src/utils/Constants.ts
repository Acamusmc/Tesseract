/*!
 * @file Constants Definitions
 * @author Sankarsan Kampa (a.k.a. k3rn31p4nic)
 * @license GPL-3.0
 * @copyright 2018 - The Bastion Bot Project
 */

import { Constants } from "discord.js";


const ArgumentTypes = {
    STRING: String,
    UPPERCASE: (arg: string): string => arg.toUpperCase(),
    LOWERCASE: (arg: string): string => arg.toLowerCase(),
    BOOLEAN: (arg: string): boolean => {
        if (!arg) return false;
        if (arg.toLowerCase() === "false" || arg === "0") return false;
        return Boolean(arg);
    },
    NUMBER: (arg: string): number => arg && !isNaN(Number(arg)) ? parseFloat(arg) : null,
    INTEGER: (arg: string): number => arg && !isNaN(Number(arg)) ? parseInt(arg) : null,
    BIGINT: (arg: string): bigint => arg && !isNaN(Number(arg)) ? BigInt(arg) : null,
    URL: (arg: string): URL => {
        try {
            return new URL(arg);
        } catch {
            return null;
        }
    },
    TIMESTAMP: (arg: string): number => Date.parse(arg + "Z") || null,
    DATE: (arg: string): Date => {
        const timestamp: number = ArgumentTypes.TIMESTAMP(arg);
        if (timestamp && !isNaN(timestamp)) return new Date(timestamp);
        return null;
    },
    COLOR: (arg: string): number => {
        if (!arg) return null;

        const color = parseInt(arg.replace("#", ""), 16);
        if (color < 0 || color > 0xFFFFFF || isNaN(color)) return null;

        return color;
    },
};

enum LISTENER_MODE {
    /** It's invoked every time the specified event is triggered. */
    ON,
    /**
     * One-time listener. Once the specified event is triggered, it will be
     * detached and then invoked.
     */
    ONCE,
}


export {
    Constants as discord,
    ArgumentTypes,
    LISTENER_MODE,
};
