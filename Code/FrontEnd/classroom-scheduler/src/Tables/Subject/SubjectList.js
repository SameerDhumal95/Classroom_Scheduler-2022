import React from "react";

function SubjectList({ rows, handleEdit, handleDelete }) {
  return (
    
          <div className="contain-table">
            <table className="striped-table">
              <thead>
                <tr>
                  {[
                    "No",
                    "Module Name",
                    "Duration",
                  ].map((data, index) => (
                    <th key={index}>{data}</th>
                  ))}

                  <th colSpan={2} className="text-center">
                    Actions
                  </th>
                </tr>
              </thead>
              {console.log("SubjectList:",rows)}
              <tbody>
                {rows.length > 0 ? (
                  rows.map((data, i) => (
                    <tr key={i}>
                      <td>{i + 1}</td>
                      <td>{data.name}</td>
                      <td>{data.duration}</td>
                      <td className="text-right">
                        <button
                          onClick={() => handleEdit(data.subject_id)}
                          className="button muted-button"
                        >
                          Edit
                        </button>
                      </td>
                      <td className="text-left">
                        <button
                          onClick={() => handleDelete(data.subject_id)}
                          className="button muted-button"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={9}>No Subject</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
  );
}

export default SubjectList;
