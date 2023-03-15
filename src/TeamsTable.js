export const TeamsTable = (props) => (
    <table border={props.border}>
      <thead>
        <tr>
          <th>Members</th>
          <th>Project Name</th>
          <th>Project URL</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {props.teams.map((team, index) => (
          <tr key={index}>
            <td>{team.members.split(/\s*,\s*/).join("<br>")}</td>
            <td>{team.name}</td>
            <td><a target="_blank" href={team.url}>Github</a></td>
            <td>
              <a href="#" className="delete-row" data-id="{team.id}">&#10006;</a>
              <a href="#" className="edit-row" data-id="{team.id}">&#9998;</a>
            </td>
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr>
          <td><input type="text" name="members" placeholder="enter Members" /></td>
          <td><input type="text" name="name" placeholder="enter Project name" /></td>
          <td><input type="text" name="url" placeholder="enter Project URL" /></td>
          <td><button>Save</button></td>
        </tr>
      </tfoot>
    </table>
  );