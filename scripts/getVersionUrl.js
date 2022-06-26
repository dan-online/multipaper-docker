const version = process.argv[2];
const base = "https://multipaper.io";

fetch(
  " https://multipaper.io/api/v2/projects/multipaper/version_group/" +
    version.split(".").slice(0, -1).join(".") +
    "/builds"
)
  .then((res) => res.json())
  .then((res) => {
    const versionFound = res.builds
      .sort((b, a) => new Date(a.time) - new Date(b.time))
      .find((x) => x.version === version);
    const downloadMaster =
      base +
      "/api/v2/projects/multipaper/versions/" +
      versionFound.version +
      "/builds/" +
      versionFound.build +
      "/downloads/" +
      versionFound.downloads.master.name;

    const downloadApp =
      base +
      "/api/v2/projects/multipaper/versions/" +
      versionFound.version +
      "/builds/" +
      versionFound.build +
      "/downloads/" +
      versionFound.downloads.application.name;

    console.log(JSON.stringify({ app: downloadApp, master: downloadMaster }));
  });
