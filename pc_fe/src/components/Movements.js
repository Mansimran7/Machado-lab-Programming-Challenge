import * as ReactBootStrap from 'react-bootstrap'

const Movements = (props) => {
  console.log("ansM =",  props.ans)

  return(
    <div>
      <h2> Movements Data </h2>
      <ReactBootStrap.Table striped bordered hover>
      <tbody>
        <tr>
          <th>ID</th>
          <th>Account Company</th>
          <th>Movement Reason</th>
          <th>Species</th>
          <th>Origin Premise ID</th>
          <th>Destination Premise ID</th>
          <th>Number of Items moved</th>
          <th>Shipment Start Date</th>
        </tr>
        {
          props.ans && props.ans.map((e) => (
            <tr key={e.id}>
              <td>{e.id}</td>
              <td>{e.account_company}</td>
              <td>{e.new_movement_reason}</td>
              <td>{e.new_species}</td>
              <td>{e.new_origin_premid}</td>
              <td>{e.new_destination_premid}</td>
              <td>{e.new_num_of_item_moved}</td>
              <td>{e.new_shipment_start_date}</td>
            </tr>  
          ))
        }
      </tbody>
    </ReactBootStrap.Table>
    </div>
  )
}

export default Movements