import { Octokit } from "octokit";

interface Config {
  token: string;
  endpoint?: string;
}

class OctoGit {
  public readonly ENDPOINT = "github.com";

  private readonly octokit: Octokit;

  constructor(readonly input: Config) {
    const { token: auth, endpoint } = input;
    this.octokit = new Octokit({ auth, endpoint: endpoint || this.ENDPOINT });
  }

  async addCommentOnPr(input: {
    owner: string;
    repo: string;
    issue_number: number;
    comment: string;
  }) {
    try {
      await this.octokit.rest.issues.createComment({
        owner: input.owner,
        repo: input.repo,
        issue_number: input.issue_number,
        body: "test",
      });
    } catch (ex) {
      console.log(ex);
    }
  }
}

const kit = new OctoGit({
  token: `Your token`,
});

kit.addCommentOnPr({
  repo: "repo",
  owner: "name",
  issue_number: 1,
  comment: "test",
});
