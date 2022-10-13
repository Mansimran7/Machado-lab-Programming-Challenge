import * as ReactBootStrap from 'react-bootstrap'

const Populations = (props) => {
  console.log("ansP =",  props.ans)
  props.ans.map(element => {
    console.log( element.id);
  })
    return(
      <div>
        <h2> Populations Data</h2>
        <ReactBootStrap.Table striped bordered hover>
        <tbody>
          <tr>
            <th>ID</th>
            <th>Premise ID</th>
            <th>Total Animals</th>
          </tr>
          {
         
            props.ans && props.ans.map((e) => (
              <tr key={e.id}>
                <td>{e.id}</td>
                <td>{e.premiseID}</td>
                <td>{e.total_animal}</td>
              </tr>  
            ))
          }
        </tbody>
      </ReactBootStrap.Table>
      </div>
    )
}

export default Populations