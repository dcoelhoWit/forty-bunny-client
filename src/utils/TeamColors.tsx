export function getTeamColor(team: string): string {
  var color: string = "white";
  switch (team) {
    case "red":
        color = "linear-gradient(to right bottom, #f64646, #8a2c28)";
        break;
    case "blue":
        color = "linear-gradient(to right bottom, #76bcea, #463b76)";
        break;
    case "yellow":
        color = "linear-gradient(to right bottom, #cece57, #8f8127)";
        break;
    case "green":
        color = "linear-gradient(to right bottom, #7fcd77, #1b7e1b)";
        break;
    default:
        color = "linear-gradient(to right bottom, #ffb88e, #ea5753)";
        break;
  }

  return color;
}
