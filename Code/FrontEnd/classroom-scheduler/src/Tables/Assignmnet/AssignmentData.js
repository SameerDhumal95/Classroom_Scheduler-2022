export const columns = [
    { field: "id",
    headerName: "ID",
     width: 90 },
    {
      field: "name",
      headerClassName: 'theme--header',
      headerAlign: 'center',
      headerName: "Module Name",
      width: 150,
      editable: true,
    },
    ,
    {
      field: "file",
      headerClassName: 'theme--header',
      headerAlign: 'center',
      headerName: "File",
      width: 90,
      editable: true,
    },
    {
        field: "assign_date",
        headerClassName: 'theme--header',
        headerAlign: 'center',
        headerName: "Assigned Date",
        width: 120,
        editable: true,
      },
      {
        field: "submission_date",
        headerClassName: 'theme--header',
        headerAlign: 'center',
        headerName: "Submission Date",
        width: 140,
        editable: true,
      },
  ];
  
  export const rows = [
    {
        id: 1,
        name: "WPT",
        file: null,
        assign_date: "2022-08-30",
        submission_date: "2022-08-31",
        subject_id: 1,
        teacher_id: 1
    },
    {
        id: 2,
        name: "DS",
        file: null,
        assign_date: "2022-09-06",
        submission_date: "2022-09-10",
        subject_id: 2,
        teacher_id: 3
    },
    {
        id: 3,
        name: "DS2",
        file: null,
        assign_date: "2022-08-30",
        submission_date: "2022-08-31",
        subject_id: 3,
        teacher_id: 2
    }
]