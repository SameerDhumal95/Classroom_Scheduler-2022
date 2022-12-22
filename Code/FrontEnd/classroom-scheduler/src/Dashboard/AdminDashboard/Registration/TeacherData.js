import { AccountCircle, InputSharp } from "@mui/icons-material";
import EmailIcon from '@mui/icons-material/Email';
import KeyIcon from '@mui/icons-material/Key';
import LocalPhoneRoundedIcon from '@mui/icons-material/LocalPhoneRounded';

export const TeacherColumn=[
    {
        name:"First Name",
        type:"text",
        id:" first_name ",
        avatar:<AccountCircle />
    },
    {
        name:"Middle Name",
        type:"text",
        id:" middle_name ",
        avatar:<AccountCircle />
    },
    {
        name:"Last Name",
        type:"text",
        id:" last_name ",
        avatar:<AccountCircle />
    },
    {
        name:"Username",
        type:"email",
        id:" username ",
        avatar:<EmailIcon />
    },
    {
        name:"Password",
        type:"text",
        id:" password",
        avatar:<KeyIcon />
    },
    {
        name:"Email",
        type:"email",
        id:" email",
        avatar:<EmailIcon />
    },
    {
        name:"Phone",
        type:"number",
        id:"phone",
        avatar:<LocalPhoneRoundedIcon />
    },
]

