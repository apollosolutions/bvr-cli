import { Command } from "clipanion";
import { Sdk } from "./gql/sdk";

export type GenerateReportOptions = {
    command: Command;
    client: Sdk;
    accountId: string;
    from: number;
    output: string;
};
