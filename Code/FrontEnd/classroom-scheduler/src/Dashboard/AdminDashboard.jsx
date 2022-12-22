import { Button, Grid, Paper,Card,CardActions,Typography,CardContent,CardMedia,Container } from "@mui/material";
import React from "react";
import { styled } from '@mui/material/styles';
import Header from "../Header/Header";
import { Box } from "@mui/system";
import { CardData } from "./CardData";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    paddingTop:"25%"
  }));


const AdminDashboard=()=>{
const cards=[1,2,3,4];
    return(
        <>
        <div>
           <Header></Header>
           <Box style={{marginTop:'100px'}}>
            <Container className="cardGrid" maxWidth="md" style={{padding:'20px 0px' }}>
                <Grid container spacing={3}>
                    {CardData.map((card,keyVal)=>(
                       <Grid item key={keyVal} xs={12} sm={6} md={4} lg={3}>
                        <Card className="card" style={{height:'100%',display:'flex',flexDirection:'column',justifyContent:'center'}}>
                        <CardMedia>{card.icon} </CardMedia> 
                       <CardContent className="cardContent" style={{flexGrow:'1'}}>
                            <Typography gutterBottom variant="h5">
                                {card.title}
                            </Typography>
                            <Typography>
                               Quants
                            </Typography>
                        </CardContent>
                        </Card>
                    </Grid>
                    ))}
                </Grid>
            </Container>
            </Box>
        </div>
        </>
    )
}

export default AdminDashboard;