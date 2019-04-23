import React from 'react';
import { Table } from 'reactstrap';
import './style.css'

const genrateTableBody = flavor => (
    flavor.map((flvr, index) => (
        <tr key={index}>
            <th scope="row">{index+1}</th>
            <td>{flvr.flavor_text}</td>
            <td>{flvr.language.name}</td>
            <td>{flvr.version_group.name}</td>
      </tr>
    ))
)

export default (props) =>{
    console.log(props)
  return (
    <div>
        <Table dark>
        <thead>
          <tr>
            <th>#</th>
            <th>Flavor text</th>
            <th>Language</th>
            <th>Version Group</th>
          </tr>
        </thead>
        <tbody>
            {genrateTableBody(props.flavor)}
        </tbody>
      </Table>
    </div>
  )
}

