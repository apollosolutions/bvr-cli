# bvr-cli

**The code in this repository is experimental and has been provided for reference purposes only. Community feedback is welcome but this project may not be supported in the same way that repositories in the official [Apollo GraphQL GitHub organization](https://github.com/apollographql) are. If you need help you can file an issue on this repository, [contact Apollo](https://www.apollographql.com/contact-sales) to talk to an expert, or create a ticket directly in Apollo Studio.**

This CLI will generate reports to help assist with a business value realization review. These reports cover:

- Overall usage of your supergraph
- Field usage and changes over time
- Odyssey usage by user
- Schema checks/publishes data
- Per-variant details

# Usage

## Requirements

- Node.js
- An Apollo GraphOS user token with [Org Admin permissions](https://www.apollographql.com/docs/graphos/org/members/)

## Basic Usage

Using a terminal window, run:

```sh
npx github:@apollosolutions/bvr-cli report
```

This will prompt you for your GraphOS key and the correct account to be run for. You can then select the date range applicable for the report, and it will then process the reports as requested. Once completed, it will create 9 CSV files, each containing useful information about your organization on GraphOS.

### Basic Report Details

The nine reports are:

- Client usage: information about the clients accessing a graph, including the name of the graph and the client name
- Field changes: the past 30 records of history (usually last 30 schema publishes) per variant and the number of types and fields within said variant after the publish
- Field records: the last 30 changes that have happened in a variant at a field level, such as additions or removals
- Field usage: information about the usage of a field per-variant over the given window
- Operation counts: usage per variant for graphs in your GraphOS organization
- Schema checks/publishes: breakdowns on usage for schema checks/publishes
- Users: basic details about organization members, such as course access or certification information in Odyssey and latest login information
- Variants: basic information about variants in your organization

## Known Limitations

- Published only as source code to Github. Not available on NPM.
- Doesn't support arbitrary date ranges, only up to the last 30 days of data.
- On extremely large graphs, data may be incomplete for the requested date range.
