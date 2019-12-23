export enum GoalTabs {
    CURRENT = "Current",
    HISTORY = "History",
    FUTURE = "Future",
}

export enum StudentLandingMainTabs {
    GOALS = "Goals",
    TEAM = "Team",
    PURPOSE = "Purpose",
    RECOMMENDATIONS = "Recommendations",
}

export const getPurposeFunctionText = (purpose: any) => {
    const { functions } = purpose;
    if (!functions) return "";
    let functionText = "";
    functions.forEach((element: any) => {
        if (element && element.function && element.sequence === 1) {
            functionText = element.function.name;
        }
    });
    return functionText;
}

export const getPurposeIndustryText = (purpose: any) => {
    const { industries } = purpose;
    if (!industries) return "";
    let industriesText = "";
    industries.forEach((element: any) => {
        if (element && element.industry && element.sequence === 1) {
            industriesText = element.industry.name;
        }
    });
    return industriesText;
}

export const getPurposeLocationText = (purpose: any) => {
    const { locations } = purpose;
    if (!locations) return "";
    let locationsText = "";
    locations.forEach((element: any) => {
        if (element && element.objLocation && element.sequence === 1) {
            locationsText = element.objLocation.city;
        }
    });
    return locationsText;
}

export const getGoalsTabFromTabName = (tabName: string) => {
    // Checking lowercase string because of query param - query strings are lowercase by default

    if (tabName === GoalTabs.CURRENT || tabName === GoalTabs.CURRENT.toLowerCase()) {
        return GoalTabs.CURRENT;
    } else if (tabName === GoalTabs.FUTURE || tabName === GoalTabs.FUTURE.toLowerCase()) {
        return GoalTabs.FUTURE;
    } else if (tabName === GoalTabs.HISTORY || tabName === GoalTabs.HISTORY.toLowerCase()) {
        return GoalTabs.HISTORY;
    }
}
