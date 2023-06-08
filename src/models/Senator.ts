export interface Senator {
  id: number;
  proPublicaId: string;
  title: string;
  shortTitle: string;
  apiUrl: string;
  firstName: string;
  middleName: string;
  lastName: string;
  suffix: string;
  dateOfBirth: string;
  gender: string;
  party: string;
  leadershipRole: string;
  twitterAccount: string;
  facebookAccount: string;
}

/*
ToDo: Add partisan politics related numbers
    youtubeAccount: string,
    govtrackId: number,
    cspanId: number,
    votesmartId: number,
    icpsrId: number,
    crpId: string,
    googleEntityId: string,
    fecCandidateId: string,
    url: string,
    rssUrl: string,
    contactForm: string,
    inOffice: boolean,
    //    @JsonProperty(value="cook_pvi")
    dwNominate: number,
    //    @JsonProperty(value="ideal_point")
    seniority: number,
    nextElection: string,
    totalVotes: number,
    missedVotes: number,
    totalPresent: number,
    lastUpdated: string,
    ocdId: string,
    office: string,
    phone: string,
    //    @JsonProperty(value="fax")
    state: string,
    senateClass: number,
    stateRank: string,
    lisId: string,
    missedVotesPct: number,
    votesWithPartyPct: number,
    votesAgainstPartyPct: number,
    imageUrl: string,
 */
