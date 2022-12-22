import GridViewIcon from '@mui/icons-material/GridView';
import ViewTimelineIcon from '@mui/icons-material/ViewTimeline';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import PsychologyAltIcon from '@mui/icons-material/PsychologyAlt';
import EventNoteIcon from '@mui/icons-material/EventNote';
import AssignmentIcon from '@mui/icons-material/Assignment';
import Person2Icon from '@mui/icons-material/Person2';

export const CommonHeaderData=[
    {
        title:"Calender",
        link:"/static-calender"
    },
    {
        title:"To Do",
        link:"/todo"
    }
]

export const AdminNavbarData=[
    {
        icon:<GridViewIcon />,
        title:"Dashboard",
        link:'/AdminDashboard'
    },
    {
        icon:<ViewTimelineIcon />,
        title:"Timetable",
        link:"/Atimetable"
    },
    {
        icon:<HelpOutlineIcon />,
        title:"Teacher",
        link:"/Ateacher"
    },
    {
        icon:<PsychologyAltIcon />,
        title:"Student",
        link:"/Astudent"
    },
    {
        icon:<EventNoteIcon />,
        title:"To Do",
        link:"/UnderService"
    },
    {
        icon:<Person2Icon />,
        title:"Profile",
        link:"/AdminProfile"
    },
]

export const StudentHeaderData=[
    {
        title:"Calender",
        link:"/static-calender"
    },
    {
        title:"To Do",
        link:"#faq"
    }
]

export const StudentNavbarData=[
    {
        icon:<GridViewIcon />,
        title:"Dashboard",
        link:'/StudentDashboard'
    },
    {
        icon:<ViewTimelineIcon />,
        title:"Subject Info",
        link:"/Subject"
    },
    {
        icon:<AssignmentIcon />,
        title:"Assignment",
        link:"/UnderService"
    },
    {
        icon:<Person2Icon />,
        title:"Profile",
        link:"/StudentProfile"
    },
]

export const TeacherHeaderData=[
    {
        title:"To Do",
        link:"#contact"
    },
    {
        title:"Notification",
        link:"#faq"
    }
]

export const TeacherNavbarData=[
    {
        icon:<GridViewIcon />,
        title:"Dashboard",
        link:'/TeacherDashboard'
    },
    {
        icon:<ViewTimelineIcon />,
        title:"Timetable",
        link:"/Ttimetable"
    },
    {
        icon:<AssignmentIcon />,
        title:"Assignment",
        link:"/UnderService"
    },
    {
        icon:<Person2Icon />,
        title:"Profile",
        link:"/TeacherProfile"
    },
]
