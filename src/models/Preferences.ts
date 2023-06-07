export class Preferences {
  constructor(
    public id: number,
    public my_state_only: boolean,
    public my_party_only: boolean,
    public twitter_hide: boolean,
    public facebook_hide: boolean,
    public youtube_hide: boolean,
    public google_entity_hide: boolean,
    public cspan_hide: boolean,
    public gov_track_hide: boolean,
    public open_secrets_hide: boolean,

  ) {}
}

/*

ToDo: add these when bug is fixed
     public vote_view_hide: boolean,
    public fec_hide: boolean,
    public vote_smart_hide: boolean,

    public user_id: string,
    public my_county_only: boolean,

 */
