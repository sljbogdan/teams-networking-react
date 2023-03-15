function getValues(){
  const members = document.querySelector('[name=members]').value;
  const name = document.querySelector('[name=name]').value;
  const url = document.querySelector('[name=url]').value;
  return  {
      members, 
      name,
      url
  };
}

export const TeamsTable = ({teams, border, onSubmit, onDelete}) => (
    <form onSubmit={e =>{
      e.preventDefault();
      const values = getValues();
      onSubmit(values);
    }}> 
      <table border={border}>
      <thead>
        <tr>
          <th>Members</th>
          <th>Project Name</th>
          <th>Project URL</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {teams.map((team, index) => (
          <tr key={index}>
            <td>{team.members.split(/\s*,\s*/).join("<br>")}</td>
            <td>{team.name}</td>
            <td><a target="_blank" href={team.url}>Github</a></td>
            <td>
              <a href="#" className="delete-row"  onClick ={e => {
                onDelete(team.id);
              }}>&#10006;</a>
              <a href="#" className="edit-row" data-id="{team.id}">&#9998;</a>
            </td>
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr>
          <td><input type="text" required name="members" placeholder="enter Members" /></td>
          <td><input type="text" required name="name" placeholder="enter Project name" /></td>
          <td><input type="text" required name="url" placeholder="enter Project URL" /></td>
          <td><button type="submit">Save</button></td>
        </tr>
      </tfoot>
      </table>
    </form>
  );