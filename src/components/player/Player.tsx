import "./player.css";

export const Player = () => {
  const birthDate = new Date("2021-01-10"); // YYYY-MM-DD format
  const ageDiffMs = Date.now() - birthDate.getTime();
  const ageDate = new Date(ageDiffMs); // convert diff to date

  const age = Math.abs(ageDate.getUTCFullYear() - 1970);
  return (
    <div id="player">
      <h1>
        PAULIN NZODOUM <span className="level">LEVEL {age}</span>
      </h1>
      <div id="player-lines">
        <span id="player-lines-thick"></span>
        <span id="player-lines-thin"></span>
      </div>
      <h2>Fullstack Developer / JR. DevOps.</h2>
    </div>
  );
};
