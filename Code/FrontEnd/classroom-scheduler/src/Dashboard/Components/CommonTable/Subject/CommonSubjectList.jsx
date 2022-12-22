import React from 'react'

function CommonSubjectList({rows}) {
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
                </tr>
              </thead>
              <tbody>
                {rows.length > 0 ? (
                  rows.map((data, i) => (
                    <tr key={i}>
                      <td>{i + 1}</td>
                      <td>{data.name}</td>
                      <td>{data.duration}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={7}>No Subject</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
  );
}

export default CommonSubjectList