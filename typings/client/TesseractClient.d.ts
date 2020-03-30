﻿/*!
 * @file TesseractClient Class
 * @author Sankarsan Kampa (a.k.a. k3rn31p4nic)
 */
import { Client, ClientOptions } from "discord.js";
import { Locke } from "locke";
import TesseractClientLogger from "./TesseractClientLogger";
import TesseractClientUtils from "./TesseractClientUtils";
import TesseractDataResolver from "./TesseractDataResolver";
import DataStoreManager from "../datastore/DataStoreManager";
import InterruptModuleManager from "../interrupters/InterruptModuleManager";
import * as settings from "../utils/settings";
declare class TesseractClient extends Client {
    configurations: settings.TesseractConfigurations;
    credentials: settings.TesseractCredentials;
    log: TesseractClientLogger;
    resolver: TesseractDataResolver;
    utils: TesseractClientUtils;
    locale: Locke;
    interrupter: InterruptModuleManager;
    dataStore: DataStoreManager;
    constructor(options?: ClientOptions);
    loadSettings(): void;
    connectDataStore(): Promise<void>;
    login(token?: string): Promise<string>;
    toString(): string;
}
export default TesseractClient;
//# sourceMappingURL=TesseractClient.d.ts.map