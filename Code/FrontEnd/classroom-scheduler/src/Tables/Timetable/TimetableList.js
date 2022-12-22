import React from "react";

function TeacherList({ rows, handleEdit, handleDelete }) {
  return (
    
          <div className="contain-table">
            <table className="striped-table">
              <thead>
                <tr>
                  {[
                    "No",
                    "Date",
                    "Start Time",
                    "End Time",
                    "Module Name",
                    "Faculty",
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
                      {console.log("Data:",data)}
                      <td>{i + 1}</td>
                      <td>{data.date}</td>
                      <td>{data.start_time}</td>
                      <td>{data.end_time}</td>
                      <td>{data.subject_name}</td>
                      <td>{data.teacher_name}</td>
                      <td className="text-right">
                        <button
                          onClick={() => handleEdit(data.timetable_id)}
                          className="button muted-button"
                        >
                          Edit
                        </button>
                      </td>
                      <td className="text-left">
                        <button
                          onClick={() => handleDelete(data.timetable_id)}
                          className="button muted-button"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={8}>No Timetable</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
  
  );
}

export default TeacherList;
