import React from "react";

function TeacherList({ rows, handleEdit, handleDelete }) {
  return (
    
          <div className="contain-table">
            <table className="striped-table">
              <thead>
                <tr>
                  {[
                    "No",
                    "First Name",
                    "Middle Name",
                    "Last Name",
                    "Username",
                    "Password",
                    "Email",
                    "Phone",
                  ].map((data, index) => (
                    <th key={index}>{data}</th>
                  ))}

                  <th colSpan={2} className="text-center">
                    Actions
                  </th>
                </tr>
              </thead>
              {console.log("TeacherList:",rows)}
              <tbody>
                {rows.length > 0 ? (
                  rows.map((data, i) => (
                    <tr key={i}>
                      <td>{i + 1}</td>
                      <td>{data.first_name}</td>
                      <td>{data.middle_name}</td>
                      <td>{data.last_name}</td>
                      <td>{data.username}</td>
                      <td>{data.password}</td>
                      <td>{data.email_id}</td>
                      <td>{data.phone}</td>
                      <td className="text-right">
                        <button
                          onClick={() => handleEdit(data.teacher_id)}
                          className="button muted-button"
                        >
                          Edit
                        </button>
                      </td>
                      <td className="text-left">
                        <button
                          onClick={() => handleDelete(data.teacher_id)}
                          className="button muted-button"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={9}>No Teacher</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
  
  );
}

export default TeacherList;
