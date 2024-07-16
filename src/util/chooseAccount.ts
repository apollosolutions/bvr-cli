import { confirm, select } from '@inquirer/prompts'

export const chooseAccountFromToken = async (existingAccounts: string[]): Promise<string> => {
    // Check if the user wants to use the account within the token itself
    if (existingAccounts.length === 1) {
        const useExisting = await confirm({
            message: `Use account ${existingAccounts[0]}?`,
            default: true,
        })

        if (useExisting) {
            return existingAccounts[0]
        }
    } else if (existingAccounts.length > 1) {
        const accountId = await select({
            message: 'Select an account:',
            choices: existingAccounts.map(id => ({ name: id, value: id }))
        })
        return accountId
    }
    return ''
}
