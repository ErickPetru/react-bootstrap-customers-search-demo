import React, { memo } from 'react';
import { Button, Dropdown, Table } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

export default memo((props = { data: {} }) => {
  const navigate = useNavigate();

  return (
    <div className="vstack gap-3">
      <Dropdown autoClose="outside">
        <Dropdown.Toggle variant="primary" id="dropdownAccountActions">
          Customer Account: Actions
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="/create-new-sale">Create New Sale</Dropdown.Item>
          <Dropdown.Item href="/create-special-service-memo">Create Special Service Memo</Dropdown.Item>
          <Dropdown.Item href="/file-notes">File Notes</Dropdown.Item>
          <Dropdown.Item href="/view-store-credits">View Store Credits</Dropdown.Item>
          <Dropdown.Item href="/access-inhouse-account">Access InHouse Account</Dropdown.Item>
          <Dropdown.Item href="/view-revolving-statements">View Revolving Statements</Dropdown.Item>
          <Dropdown.Item href="/apply-for-okinus-account">Apply for Okinus Account</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <Table className="mt-4" striped>
        <thead>
          <tr>
            <th>Sale #</th>
            <th>Date</th>
            <th>Receipt Number</th>
            <th>Sale Notes</th>
            <th>Status</th>
            <th>View Sale</th>
          </tr>
        </thead>
        <tbody>
          {props.data?.length ? (
            props.data.map((sale) => (
              <tr key={sale.id}>
                <td>
                  Sale #
                  {sale.id}
                </td>
                <td>{sale.date}</td>
                <td>
                  <Link to={`/sale/Receipt?id=${sale.id}&type=1`}>
                    Receipt #
                    {sale.receiptNumber}
                  </Link>
                </td>
                <td>
                  <Link to={`/sale/note?id=${sale.id}`}>View Note</Link>
                </td>
                <td>
                  <span>{sale.status}</span>
                  &nbsp;
                  <Link to={`/inventory/delivered?sale=${sale.id}`}>
                    {sale.delived}
                    /
                    {sale.totalItems}
                  </Link>
                </td>
                <td>
                  <Button variant="primary" size="sm" onClick={() => navigate(`/sale?id=${sale.id}`)}>
                    Select
                  </Button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={6} className="text-center text-muted pt-3 pb-3">
                No sales to show.
              </td>
            </tr>
          )}
        </tbody>
      </Table>
    </div>
  );
});
