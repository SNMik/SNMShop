export class PavFilter {
  constructor(
    public centerFrequency: string,
    public type: string,
    public bandwidthMgz: string,
    public stripLevelBandwidthDb: string,
    public unevenness: string,
    public losses: string,
    public housing: string,
    public acceptance: string
    ) { }
}
