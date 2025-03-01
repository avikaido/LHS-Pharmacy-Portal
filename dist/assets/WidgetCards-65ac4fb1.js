import{j as e,R as u,r as C,L as k,u as v,aR as N,D as b,ba as V,E as w,bb as G,bc as $,bd as U,M as H,aM as O,K as X,be as q,G as K,aJ as W,aK as _}from"./index-1d78c4ac.js";import{B as Z}from"./Breadcrumb-4b5ba697.js";import{P as Q}from"./PageContainer-51f17055.js";import{P as Y,R as ee}from"./RecentTransactions-120f2d1e.js";import{T as te}from"./TopCards-498c26aa.js";import{P as d}from"./ParentCard-b3c2f72c.js";import{aG as A,b8 as re,ai as ae,b9 as ie,E as oe,aW as ne,_ as se,l as ce,ba as le,bb as de,bc as me,v as pe,aL as he,aM as ge,aN as xe,aO as ue,bd as ye,be as je,bf as Ce}from"./index.esm-4ca6571d.js";import{C as m}from"./CodeDialog-4128d6b6.js";import{u as M,G as a}from"./Grid-ba112631.js";import{S as i}from"./Stack-74791772.js";import{A as l}from"./Avatar-49c7f2db.js";import{B as c,T as o}from"./Box-3b2e6d90.js";import{B as y}from"./BlankCard-65d5aa30.js";import{S as f}from"./Skeleton-b6b279fd.js";import{C as B}from"./CardMedia-39f3456d.js";import{C as h}from"./CardContent-97c31a3d.js";import{T as P}from"./Tooltip-58d28098.js";import{C as I}from"./Chip-ef3907c5.js";import{C as ve}from"./Card-ed0a9074.js";import{I as j}from"./IconButton-6eb83b27.js";import{F as be}from"./Fab-f5ac0b6f.js";import{R as we}from"./Rating-5d1fec24.js";import{B as x}from"./Button-6de5bece.js";import{A as fe}from"./AvatarGroup-707c9b19.js";import{D as T}from"./Divider-32914f08.js";import{C as Se}from"./CustomSlider-0693626c.js";import{C as ke}from"./CustomSwitch-dd9f44e8.js";import"./Link-5958468e.js";import"./DashboardCard-71df2df7.js";import"./clsx-0839fdbe.js";import"./useThemeProps-fa04b35d.js";import"./useThemeProps-a461f42f.js";import"./isMuiElement-a2555389.js";import"./icon-speech-bubble-fd1b3029.js";import"./CardHeader-4375bfdf.js";import"./DialogContent-aa8a214a.js";import"./Modal-5026ae4f.js";import"./useId-521a9597.js";import"./ownerWindow-f1e1d6ee.js";import"./createChainedFunction-0bab83cf.js";import"./utils-f13413e5.js";import"./Portal-8f313b54.js";import"./DialogTitle-be3ad24b.js";import"./toConsumableArray-d8b147df.js";import"./createStack-08af7ebe.js";import"./styled-db48c038.js";import"./useSlot-a49cf6b5.js";import"./colorManipulator-94529648.js";import"./Popper-880e6f72.js";import"./createPopper-04c39de4.js";import"./useControlled-05793c79.js";import"./Grow-cf41a8df.js";import"./visuallyHidden-fa9934b5.js";import"./dividerClasses-40064371.js";import"./Slider-5d7a41b3.js";import"./Switch-77494226.js";import"./SwitchBase-a9247a40.js";import"./useFormControl-9666228d.js";const Te=()=>e.jsx(e.Fragment,{children:e.jsx(m,{children:`
import React from 'react';
import { useTheme } from '@mui/material/styles';
import { Stack, Typography, Avatar, Box, Card, CardContent } from '@mui/material';
import { IconDatabase, IconMail, IconMapPin, IconPhone, IconScreenShare } from '@tabler/icons';
import { useTheme } from '@mui/material/styles';
import { useSelector } from '@/store/hooks';
import { AppState } from '@/store/store';

type Props = {
  title?: string;
  subtitle?: string;
  action?: JSX.Element | any;
  footer?: JSX.Element;
  cardheading?: string | JSX.Element;
  headtitle?: string | JSX.Element;
  headsubtitle?: string | JSX.Element;
  children?: JSX.Element;
  middlecontent?: string | JSX.Element;
};

const DashboardCard = ({
  title,
  subtitle,
  children,
  action,
  footer,
  cardheading,
  headtitle,
  headsubtitle,
  middlecontent,
}: Props) => {
  const customizer = useSelector((state: AppState) => state.customizer);

  const theme = useTheme();
  const borderColor = theme.palette.divider;

  return (
    <Card
      sx={{ padding: 0, border: !customizer.isCardShadow ?  '1px solid {borderColor}' : 'none' }}
      elevation={customizer.isCardShadow ? 9 : 0}
      variant={!customizer.isCardShadow ? 'outlined' : undefined}
    >
      {cardheading ? (
        <CardContent>
          <Typography variant="h5">{headtitle}</Typography>
          <Typography variant="subtitle2" color="textSecondary">
            {headsubtitle}
          </Typography>
        </CardContent>
      ) : (
        <CardContent sx={{p: "30px"}}>
          {title ? (
            <Stack
              direction="row"
              spacing={2}
              justifyContent="space-between"
              alignItems={'center'}
              mb={3}
            >
              <Box>
                {title ? <Typography variant="h5">{title}</Typography> : ''}

                {subtitle ? (
                  <Typography variant="subtitle2" color="textSecondary">
                    {subtitle}
                  </Typography>
                ) : (
                  ''
                )}
              </Box>
              {action}
            </Stack>
          ) : null}

          {children}
        </CardContent>
      )}

      {middlecontent}
      {footer}
    </Card>
  );
};

const UpcomingActivity = () => {
  // chart color
  const theme = useTheme();
  const primary = theme.palette.primary.main;
  const primarylight = theme.palette.primary.light;
  const error = theme.palette.error.main;
  const errorlight = theme.palette.error.light;
  const warning = theme.palette.warning.main;
  const warninglight = theme.palette.warning.light;
  const secondary = theme.palette.secondary.main;
  const secondarylight = theme.palette.secondary.light;
  const success = theme.palette.success.main;
  const successlight = theme.palette.success.light;

  const stats = [
    {
      title: 'Trip to singapore',
      subtitle: 'working on',
      time: 5,
      color: primary,
      lightcolor: primarylight,
      icon: <IconMapPin width={20} />,
    },
    {
      title: 'Archived Data',
      subtitle: 'working on',
      time: 10,
      color: secondary,
      lightcolor: secondarylight,
      icon: <IconDatabase width={20} />,
    },
    {
      title: 'Meeting with client',
      subtitle: 'pending',
      time: 15,
      color: warning,
      lightcolor: warninglight,
      icon: <IconPhone width={20} />,
    },
    {
      title: 'Screening Task Team',
      subtitle: 'working on',
      time: 20,
      color: error,
      lightcolor: errorlight,
      icon: <IconScreenShare width={20} />,
    },
    {
      title: 'Send envelope to John',
      subtitle: 'done',
      time: 20,
      color: success,
      lightcolor: successlight,
      icon: <IconMail width={20} />,
    },
  ];

  return (
    <DashboardCard title="Upcoming Activity" subtitle='In New year'>
      <>
        <Stack spacing={3} mt={5}>
          {stats.map((stat, i) => (
            <Stack
              direction="row"
              spacing={3}
              justifyContent="space-between"
              alignItems="center"
              key={i}
            >
              <Stack direction="row" alignItems="center" spacing={2}>
                <Avatar
                  variant="rounded"
                  sx={{ bgcolor: stat.lightcolor, color: stat.color, width: 40, height: 40 }}
                >
                  {stat.icon}
                </Avatar>
                <Box>
                  <Typography variant="h6" mb="4px">
                    {stat.title}
                  </Typography>
                  <Typography variant="subtitle2" color="textSecondary">
                    {stat.subtitle}
                  </Typography>
                </Box>
              </Stack>

              <Typography variant="subtitle2" color="textSecondary">
                {stat.time} mins
              </Typography>
            </Stack>
          ))}
        </Stack>
      </>
    </DashboardCard>
  );
};

export default UpcomingActivity;
`})}),Be=()=>{const r=M(),n=r.palette.primary.main,t=r.palette.primary.light,s=r.palette.error.main,p=r.palette.error.light,S=r.palette.warning.main,F=r.palette.warning.light,z=r.palette.secondary.main,D=r.palette.secondary.light,L=r.palette.success.main,R=r.palette.success.light,E=[{title:"Trip to singapore",subtitle:"working on",time:5,color:n,lightcolor:t,icon:e.jsx(A,{width:20})},{title:"Archived Data",subtitle:"working on",time:10,color:z,lightcolor:D,icon:e.jsx(re,{width:20})},{title:"Meeting with client",subtitle:"pending",time:15,color:S,lightcolor:F,icon:e.jsx(ae,{width:20})},{title:"Screening Task Team",subtitle:"working on",time:20,color:s,lightcolor:p,icon:e.jsx(ie,{width:20})},{title:"Send envelope to John",subtitle:"done",time:20,color:L,lightcolor:R,icon:e.jsx(oe,{width:20})}];return e.jsx(d,{title:"Upcoming Activity",codeModel:e.jsx(Te,{}),children:e.jsx(e.Fragment,{children:e.jsx(i,{spacing:3,mt:5,children:E.map((g,J)=>e.jsxs(i,{direction:"row",spacing:3,justifyContent:"space-between",alignItems:"center",children:[e.jsxs(i,{direction:"row",alignItems:"center",spacing:2,children:[e.jsx(l,{variant:"rounded",sx:{bgcolor:g.lightcolor,color:g.color,width:40,height:40},children:g.icon}),e.jsxs(c,{children:[e.jsx(o,{variant:"h6",mb:"4px",children:g.title}),e.jsx(o,{variant:"subtitle2",color:"textSecondary",children:g.subtitle})]})]}),e.jsxs(o,{variant:"subtitle2",color:"textSecondary",children:[g.time," mins"]})]},J))})})})},Ie=()=>e.jsx(e.Fragment,{children:e.jsx(m,{children:`
import Link  from 'next/link';
import {
  CardContent,
  Typography,
  Avatar,
  Grid,
  CardMedia,
  Stack,
  Tooltip,
  Chip,
  Box,
  Card,
} from '@mui/material';
import { IconMessage2, IconEye, IconPoint } from '@tabler/icons';

const complexCard = [
  {
    avatar: "/images/profile/user-1.jpg",
    coveravatar: "/images/blog/blog-img1.jpg",
    title: 'As yen tumbles, gadget-loving Japan goes for secondhand iPhones',
    category: 'Social',
    name: 'Georgeanna Ramero',
    view: '9,125',
    comments: '3',
    time: 'Mon, Dec 19',
  },
  {
    avatar: "/images/profile/user-2.jpg",
    coveravatar: "/images/blog/blog-img2.jpg",
    title: 'Intel loses bid to revive antitrust case against patent foe Fortress',
    category: 'Gadget',
    name: 'Georgeanna Ramero',
    view: '4,150',
    comments: '38',
    time: 'Sun, Dec 18',
  },
  {
    avatar: "/images/profile/user-3.jpg",
    coveravatar: "/images/blog/blog-img3.jpg",
    title: 'COVID outbreak deepens as more lockdowns loom in China',
    category: 'Health',
    name: 'Georgeanna Ramero',
    view: '9,480',
    comments: '12',
    time: 'Sat, Dec 17',
  },
];

const ComplexCard = () => {
  return (
    <Grid container spacing={3}>
      {complexCard.map((author, index) => (
        <Grid item xs={12} sm={4} key={index}>
          <Card className="hoverCard">
            <>
              <Typography component={Link} href="/">
                <CardMedia
                  component="img"
                  height="240"
                  image={author.coveravatar}
                  alt="green iguana"
                />
              </Typography>
              <CardContent>
                <Stack direction="row" sx={{ marginTop: '-45px' }}>
                  <Tooltip title={author.name} placement="top">
                    <Avatar aria-label="recipe" src={author.avatar}></Avatar>
                  </Tooltip>
                  <Chip
                    sx={{ marginLeft: 'auto', marginTop: '-21px', backgroundColor: 'white' }}
                    label="2 min Read"
                    size="small"
                  ></Chip>
                </Stack>
                <Chip label={author.category} size="small" sx={{ marginTop: 2 }}></Chip>
                <Box my={3}>
                  <Typography
                    gutterBottom
                    variant="h5"
                    color="inherit"
                    sx={{ textDecoration: 'none' }}
                    component={Link}
                    href="/"
                  >
                    {author.title}
                  </Typography>
                </Box>
                <Stack direction="row" gap={3} alignItems="center">
                  <Stack direction="row" gap={1} alignItems="center">
                    <IconEye size="18" /> {author.view}
                  </Stack>
                  <Stack direction="row" gap={1} alignItems="center">
                    <IconMessage2 size="18" /> {author.comments}
                  </Stack>

                  <Stack direction="row" ml="auto" alignItems="center">
                    <IconPoint size="16" />
                    <small>{author.time}</small>
                  </Stack>
                </Stack>
              </CardContent>
            </>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default ComplexCard;
`})}),Ge=[{avatar:v,coveravatar:N,title:"As yen tumbles, gadget-loving Japan goes for secondhand iPhones",category:"Social",name:"Georgeanna Ramero",view:"9,125",comments:"3",time:"Mon, Dec 19"},{avatar:b,coveravatar:V,title:"Intel loses bid to revive antitrust case against patent foe Fortress",category:"Gadget",name:"Georgeanna Ramero",view:"4,150",comments:"38",time:"Sun, Dec 18"},{avatar:w,coveravatar:G,title:"COVID outbreak deepens as more lockdowns loom in China",category:"Health",name:"Georgeanna Ramero",view:"9,480",comments:"12",time:"Sat, Dec 17"}],Ae=()=>{const[r,n]=u.useState(!0);return C.useEffect(()=>{const t=setTimeout(()=>{n(!1)},700);return()=>clearTimeout(t)},[]),e.jsx(d,{title:"Complex Card",codeModel:e.jsx(Ie,{}),children:e.jsx(a,{container:!0,spacing:3,children:Ge.map((t,s)=>e.jsx(a,{item:!0,xs:12,sm:4,children:e.jsx(y,{className:"hoverCard",children:e.jsxs(e.Fragment,{children:[e.jsx(o,{component:k,to:"/",children:r?e.jsx(f,{variant:"square",animation:"wave",width:"100%",height:240}):e.jsx(B,{component:"img",height:"240",image:t.coveravatar,alt:"green iguana"})}),e.jsxs(h,{children:[e.jsxs(i,{direction:"row",sx:{marginTop:"-45px"},children:[e.jsx(P,{title:t.name,placement:"top",children:e.jsx(l,{"aria-label":"recipe",src:t.avatar})}),e.jsx(I,{sx:{marginLeft:"auto",marginTop:"-21px",backgroundColor:p=>p.palette.mode==="dark"?p.palette.background.dark:"white"},label:"2 min Read",size:"small"})]}),e.jsx(I,{label:t.category,size:"small",sx:{marginTop:2}}),e.jsx(c,{my:3,children:e.jsx(o,{gutterBottom:!0,variant:"h5",color:"inherit",sx:{textDecoration:"none"},component:k,to:"/",children:t.title})}),e.jsxs(i,{direction:"row",gap:3,alignItems:"center",children:[e.jsxs(i,{direction:"row",gap:1,alignItems:"center",children:[e.jsx(ne,{size:"18"})," ",t.view]}),e.jsxs(i,{direction:"row",gap:1,alignItems:"center",children:[e.jsx(se,{size:"18"})," ",t.comments]}),e.jsxs(i,{direction:"row",ml:"auto",alignItems:"center",children:[e.jsx(ce,{size:"16"}),e.jsx("small",{children:t.time})]})]})]})]})})},s))})})},Me=()=>e.jsx(e.Fragment,{children:e.jsx(m,{children:`
import { CardContent, Typography, Grid, Card, CardMedia, Box, IconButton } from '@mui/material';
import { Stack } from '@mui/system';
import { IconPlayerPlay, IconPlayerSkipBack, IconPlayerSkipForward } from '@tabler/icons';

const musicCard = [
  {
    title: 'Uptown Funk',
    subheader: 'Jon Bon Jovi',
    img: "/images/blog/blog-img5.jpg",
  },
  {
    title: 'Blank Space',
    subheader: 'Madonna',
    img: "/images/blog/blog-img4.jpg",
  },
  {
    title: 'Lean On',
    subheader: 'Jennifer Lopez',
    img: "/images/blog/blog-img3.jpg",
  },
];

const MusicCard = () => {
  return (
    <Grid container spacing={3}>
      {musicCard.map((card, index) => (
        <Grid item xs={12} sm={4} key={index}>
          <Card sx={{ display: 'flex', p: 0 }}>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <CardContent sx={{ flex: '1 0 auto' }}>
                <Typography component="div" variant="h5">
                  {card.title}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" component="div">
                  {card.subheader}
                </Typography>
              </CardContent>
              <Stack direction="row" spacing={2} px={2} pb={3}>
                <IconButton aria-label="previous">
                  <IconPlayerSkipBack width="20" />
                </IconButton>
                <IconButton aria-label="play/pause" color="error">
                  <IconPlayerPlay width="20" />
                </IconButton>
                <IconButton aria-label="next">
                  <IconPlayerSkipForward width="20" />
                </IconButton>
              </Stack>
            </Box>
            <CardMedia
              component="img"
              sx={{ width: '100%', height: 180 }}
              image={card.img}
              alt="Live from space album cover"
            />
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default MusicCard;
`})}),Pe=[{title:"Uptown Funk",subheader:"Jon Bon Jovi",img:$},{title:"Blank Space",subheader:"Madonna",img:U},{title:"Lean On",subheader:"Jennifer Lopez",img:G}],Fe=()=>{const[r,n]=u.useState(!0);return C.useEffect(()=>{const t=setTimeout(()=>{n(!1)},700);return()=>clearTimeout(t)},[]),e.jsx(d,{title:"Music Card",codeModel:e.jsx(Me,{}),children:e.jsx(a,{container:!0,spacing:3,children:Pe.map((t,s)=>e.jsx(a,{item:!0,xs:12,sm:4,children:e.jsxs(ve,{sx:{display:"flex",p:0},children:[e.jsxs(c,{sx:{display:"flex",flexDirection:"column"},children:[e.jsxs(h,{sx:{flex:"1 0 auto"},children:[e.jsx(o,{component:"div",variant:"h5",children:t.title}),e.jsx(o,{variant:"subtitle1",color:"text.secondary",component:"div",children:t.subheader})]}),e.jsxs(i,{direction:"row",spacing:2,px:2,pb:3,children:[e.jsx(j,{"aria-label":"previous",children:e.jsx(le,{width:"20"})}),e.jsx(j,{"aria-label":"play/pause",color:"error",children:e.jsx(de,{width:"20"})}),e.jsx(j,{"aria-label":"next",children:e.jsx(me,{width:"20"})})]})]}),r?e.jsx(f,{variant:"square",animation:"wave",width:"100%",height:180}):e.jsx(B,{component:"img",sx:{width:"100%",height:180},image:t.img,alt:"Live from space album cover"})]})},s))})})},ze=()=>e.jsx(e.Fragment,{children:e.jsx(m,{children:`
import  Link  from 'next/link';
import { CardContent, Typography, Grid, Rating, Tooltip, Fab, Card } from '@mui/material';
import { Stack } from '@mui/system';
import { IconBasket } from '@tabler/icons';
import Image from 'next/image';

const ecoCard = [
  {
    title: 'Boat Headphone',
    subheader: 'September 14, 2024',
    photo: "/images/products/s4.jpg",
    salesPrice: 375,
    price: 285,
    rating: 4,
  },
  {
    title: 'MacBook Air Pro',
    subheader: 'September 14, 2024',
    photo: "/images/products/s5.jpg",
    salesPrice: 650,
    price: 900,
    rating: 5,
  },
  {
    title: 'Red Valvet Dress',
    subheader: 'September 14, 2024',
    photo: "/images/products/s7.jpg",
    salesPrice: 150,
    price: 200,
    rating: 3,
  },
  {
    title: 'Cute Soft Teddybear',
    subheader: 'September 14, 2024',
    photo: "/images/products/s11.jpg",
    salesPrice: 285,
    price: 345,
    rating: 2,
  },
];

const EcommerceCard = () => {
  return (
    <Grid container spacing={3}>
      {ecoCard.map((product, index) => (
        <Grid item xs={12} sm={4} lg={3} key={index}>
          <Card>
            <Typography component={Link} href="/">
              <Image src={product.photo} alt="img" width={250} height={268} style={{width: '100%'}} />
            </Typography>
            <Tooltip title="Add To Cart">
              <Fab
                size="small"
                color="primary"
                sx={{ bottom: '75px', right: '15px', position: 'absolute' }}
              >
                <IconBasket size="16" />
              </Fab>
            </Tooltip>
            <CardContent sx={{ p: 3, pt: 2 }}>
              <Typography variant="h6">{product.title}</Typography>
              <Stack direction="row" alignItems="center" justifyContent="space-between" mt={1}>
                <Stack direction="row" alignItems="center">
                  <Typography variant="h6">{product.price}</Typography>
                  <Typography color="textSecondary" ml={1} sx={{ textDecoration: 'line-through' }}>
                    {product.salesPrice}
                  </Typography>
                </Stack>
                <Rating name="read-only" size="small" value={product.rating} readOnly />
              </Stack>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default EcommerceCard;

`})}),De=[{title:"Boat Headphone",subheader:"September 14, 2024",photo:H,salesPrice:375,price:285,rating:4},{title:"MacBook Air Pro",subheader:"September 14, 2024",photo:O,salesPrice:650,price:900,rating:5},{title:"Red Valvet Dress",subheader:"September 14, 2024",photo:X,salesPrice:150,price:200,rating:3},{title:"Cute Soft Teddybear",subheader:"September 14, 2024",photo:q,salesPrice:285,price:345,rating:2}],Le=()=>{const[r,n]=u.useState(!0);return C.useEffect(()=>{const t=setTimeout(()=>{n(!1)},700);return()=>clearTimeout(t)},[]),e.jsx(d,{title:"Ecommerce Card",codeModel:e.jsx(ze,{}),children:e.jsx(a,{container:!0,spacing:3,children:De.map((t,s)=>e.jsx(a,{item:!0,xs:12,sm:4,lg:3,children:e.jsxs(y,{children:[e.jsx(o,{component:k,to:"/",children:r?e.jsx(f,{variant:"square",animation:"wave",width:"100%",height:270}):e.jsx("img",{src:t.photo,alt:"img",width:"100%"})}),e.jsx(P,{title:"Add To Cart",children:e.jsx(be,{size:"small",color:"primary",sx:{bottom:"75px",right:"15px",position:"absolute"},children:e.jsx(pe,{size:"16"})})}),e.jsxs(h,{sx:{p:3,pt:2},children:[e.jsx(o,{variant:"h6",children:t.title}),e.jsxs(i,{direction:"row",alignItems:"center",justifyContent:"space-between",mt:1,children:[e.jsxs(i,{direction:"row",alignItems:"center",children:[e.jsxs(o,{variant:"h6",children:["$",t.price]}),e.jsxs(o,{color:"textSecondary",ml:1,sx:{textDecoration:"line-through"},children:["$",t.salesPrice]})]}),e.jsx(we,{name:"read-only",size:"small",value:t.rating,readOnly:!0})]})]})]})},s))})})},Re=()=>e.jsx(e.Fragment,{children:e.jsx(m,{children:`
import { CardContent, Typography, Grid, Button, Avatar, Box, Card } from '@mui/material';
import { Stack } from '@mui/system';
import { IconMapPin } from '@tabler/icons';

const followerCard = [
  {
    title: 'Andrew Grant',
    location: 'El Salvador',
    avatar: "/images/profile/user-1.jpg",
  },
  {
    title: 'Leo Pratt',
    location: 'Bulgaria',
    avatar: "/images/profile/user-2.jpg",
  },
  {
    title: 'Charles Nunez',
    location: 'Nepal',
    avatar: "/images/profile/user-3.jpg",
  },
];

const FollowerCard = () => {
  return (
    <Grid container spacing={3}>
      {followerCard.map((card, index) => (
        <Grid item xs={12} sm={4} key={index}>
          <Card>
            <CardContent>
              <Stack direction="row" spacing={2} alignItems="center" justifyContent="space-between">
                <Stack direction="row" spacing={2}>
                  <Avatar src={card.avatar} alt={card.avatar} />
                  <Box>
                    <Typography variant="h6">{card.title}</Typography>
                    <Typography
                      variant="subtitle1"
                      color="textSecondary"
                      display="flex"
                      alignItems="center"
                      gap="3px"
                    >
                      <IconMapPin width={18} /> {card.location}
                    </Typography>
                  </Box>
                </Stack>
                <Button variant="contained" color="primary">
                  Follow
                </Button>
              </Stack>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default FollowerCard;
`})}),Ee=[{title:"Andrew Grant",location:"El Salvador",avatar:v},{title:"Leo Pratt",location:"Bulgaria",avatar:b},{title:"Charles Nunez",location:"Nepal",avatar:w}],Je=()=>e.jsx(d,{title:"Follower Card",codeModel:e.jsx(Re,{}),children:e.jsx(a,{container:!0,spacing:3,children:Ee.map((r,n)=>e.jsx(a,{item:!0,xs:12,sm:4,children:e.jsx(y,{children:e.jsx(h,{children:e.jsxs(i,{direction:"row",spacing:2,alignItems:"center",justifyContent:"space-between",children:[e.jsxs(i,{direction:"row",spacing:2,children:[e.jsx(l,{src:r.avatar,alt:r.avatar}),e.jsxs(c,{children:[e.jsx(o,{variant:"h6",children:r.title}),e.jsxs(o,{variant:"subtitle1",color:"textSecondary",display:"flex",alignItems:"center",gap:"3px",children:[e.jsx(A,{width:18})," ",r.location]})]})]}),e.jsx(x,{variant:"contained",color:"primary",children:"Follow"})]})})})},n))})}),Ne=()=>e.jsx(e.Fragment,{children:e.jsx(m,{children:`
import { CardContent, Typography, Grid, Button, Box, AvatarGroup, Avatar, Card } from '@mui/material';
import { Stack } from '@mui/system';

const followerCard = [
  {
    title: 'Andrew Grant',
    location: 'El Salvador',
    avatar: "/images/profile/user-5.jpg",
  },
  {
    title: 'Leo Pratt',
    location: 'Bulgaria',
    avatar: "/images/profile/user-2.jpg",
  },
  {
    title: 'Charles Nunez',
    location: 'Nepal',
    avatar: "/images/profile/user-3.jpg",
  },
  {
    title: 'Lora Powers',
    location: 'Nepal',
    avatar: "/images/profile/user-2.jpg",
  },
];

const FriendCard = () => {
  return (
    <Grid container spacing={3}>
      {followerCard.map((card, index) => (
        <Grid item xs={12} sm={6} lg={3} key={index}>
          <BlankCard>
            <CardContent>
              <Avatar src={card.avatar} sx={{ height: 80, width: 80 }}></Avatar>
              <Stack direction="row" spacing={2} mt={3}>
                <Box>
                  <Typography variant="h6" mb={1}>
                    {card.title}
                  </Typography>
                  <Stack direction="row" spacing={2} alignItems="center">
                    <AvatarGroup>
                      <Avatar sx={{ height: 28, width: 28 }} alt="Remy Sharp" src={"/images/profile/user-4.jpg"} />
                      <Avatar sx={{ height: 28, width: 28 }} alt="Travis Howard" src={"/images/profile/user-2.jpg"} />
                      <Avatar sx={{ height: 28, width: 28 }} alt="Cindy Baker" src={"/images/profile/user-3.jpg"} />
                    </AvatarGroup>
                    <Typography variant="subtitle2" color="textSecondary">
                      3 mutual friends
                    </Typography>
                  </Stack>
                </Box>
              </Stack>
              <Stack spacing={2} mt={3}>
                <Button size="large" variant="text" color="primary">
                  Add Friend
                </Button>
                <Button size="large" variant="text" color="secondary">
                  Remove
                </Button>
              </Stack>
            </CardContent>
          </BlankCard>
        </Grid>
      ))}
    </Grid>
  );
};

export default FriendCard;
`})}),Ve=[{title:"Andrew Grant",location:"El Salvador",avatar:v},{title:"Leo Pratt",location:"Bulgaria",avatar:b},{title:"Charles Nunez",location:"Nepal",avatar:w},{title:"Lora Powers",location:"Nepal",avatar:K}],$e=()=>e.jsx(d,{title:"Friend Card",codeModel:e.jsx(Ne,{}),children:e.jsx(a,{container:!0,spacing:3,children:Ve.map((r,n)=>e.jsx(a,{item:!0,xs:12,sm:6,lg:3,children:e.jsx(y,{children:e.jsxs(h,{children:[e.jsx(l,{src:r.avatar,sx:{height:80,width:80}}),e.jsx(i,{direction:"row",spacing:2,mt:3,children:e.jsxs(c,{children:[e.jsx(o,{variant:"h6",mb:1,children:r.title}),e.jsxs(i,{direction:"row",spacing:2,alignItems:"center",children:[e.jsxs(fe,{children:[e.jsx(l,{sx:{height:28,width:28},alt:"Remy Sharp",src:v}),e.jsx(l,{sx:{height:28,width:28},alt:"Travis Howard",src:b}),e.jsx(l,{sx:{height:28,width:28},alt:"Cindy Baker",src:w})]}),e.jsx(o,{variant:"subtitle2",color:"textSecondary",children:"3 mutual friends"})]})]})}),e.jsxs(i,{spacing:2,mt:3,children:[e.jsx(x,{size:"large",variant:"text",color:"primary",children:"Add Friend"}),e.jsx(x,{size:"large",variant:"text",color:"secondary",children:"Remove"})]})]})})},n))})}),Ue=()=>e.jsx(e.Fragment,{children:e.jsx(m,{children:`
import React from 'react';
import { CardContent, Typography, Grid, IconButton, Divider, Avatar, Box, Card } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { Stack } from '@mui/system';
import {
  IconBrandFacebook,
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandTwitter,
} from '@tabler/icons';

const SocialIcons = [
  {
    name: 'Facebook',
    icon: <IconBrandFacebook size="18" color="#1877F2" />,
  },
  {
    name: 'Instagram',
    icon: <IconBrandInstagram size="18" color="#D7336D" />,
  },
  {
    name: 'Github',
    icon: <IconBrandGithub size="18" color="#006097" />,
  },
  {
    name: 'Twitter',
    icon: <IconBrandTwitter size="18" color="#1C9CEA" />,
  },
];

const profileCard = [
  {
    name: 'Andrew Grant',
    role: 'Technology Director',
    avatar: "/images/profile/user-3.jpg",
  },
  {
    name: 'Leo Pratt',
    role: 'Telecom Analyst',
    avatar: "/images/profile/user-4.jpg",
  },
  {
    name: 'Charles Nunez',
    role: 'Environmental Specialist',
    avatar: "/images/profile/user-5.jpg",
  },
];

const ProfileCard = () => {
  const theme = useTheme();

  return (
    <Grid container spacing={3}>
      {profileCard.map((card, index) => (
        <Grid item xs={12} sm={4} key={index}>
          <Card>
            <CardContent>
              <Stack direction={'column'} gap={2} alignItems="center">
                <Avatar alt="Remy Sharp" src={card.avatar} sx={{ width: '80px', height: '80px' }} />
                <Box textAlign={'center'}>
                  <Typography variant="h5">{card.name}</Typography>
                  <Typography variant="caption">{card.role}</Typography>
                </Box>
              </Stack>
            </CardContent>
            <Divider />
            <Box
              p={2}
              py={1}
              textAlign={'center'}
              sx={{
                backgroundColor: theme.palette.mode === 'dark' ? 'rgba(0, 0, 0, 0.05)' : 'grey.100',
              }}
            >
              {SocialIcons.map((sicon) => {
                return <IconButton key={sicon.name}>{sicon.icon}</IconButton>;
              })}
            </Box>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default ProfileCard;
`})}),He=[{name:"Facebook",icon:e.jsx(he,{size:"18",color:"#1877F2"})},{name:"Instagram",icon:e.jsx(ge,{size:"18",color:"#D7336D"})},{name:"Github",icon:e.jsx(xe,{size:"18",color:"#006097"})},{name:"Twitter",icon:e.jsx(ue,{size:"18",color:"#1C9CEA"})}],Oe=[{name:"Andrew Grant",role:"Technology Director",avatar:v},{name:"Leo Pratt",role:"Telecom Analyst",avatar:b},{name:"Charles Nunez",role:"Environmental Specialist",avatar:w}],Xe=()=>{const r=M(),[n,t]=u.useState(!0);return C.useEffect(()=>{const s=setTimeout(()=>{t(!1)},700);return()=>clearTimeout(s)},[]),e.jsx(d,{title:"Profile Card",codeModel:e.jsx(Ue,{}),children:e.jsx(a,{container:!0,spacing:3,children:Oe.map((s,p)=>e.jsx(a,{item:!0,xs:12,sm:4,children:e.jsxs(y,{children:[e.jsx(h,{children:e.jsxs(i,{direction:"column",gap:2,alignItems:"center",children:[n?e.jsx(f,{variant:"square",animation:"wave",width:"100%",height:160}):e.jsx(l,{alt:"Remy Sharp",src:s.avatar,sx:{width:"80px",height:"80px"}}),e.jsxs(c,{textAlign:"center",children:[e.jsx(o,{variant:"h5",children:s.name}),e.jsx(o,{variant:"caption",children:s.role})]})]})}),e.jsx(T,{}),e.jsx(c,{p:2,py:1,textAlign:"center",sx:{backgroundColor:r.palette.mode==="dark"?"rgba(0, 0, 0, 0.05)":"grey.100"},children:He.map(S=>e.jsx(j,{children:S.icon},S.name))})]})},p))})})},qe=()=>e.jsx(e.Fragment,{children:e.jsx(m,{children:`
import React from 'react';
import { CardContent, Typography, Avatar, Divider, Button, Card } from '@mui/material';
import { Box, Stack } from '@mui/system';
import { IconMessage, IconVolume } from '@tabler/icons';
import { styled } from '@mui/material/styles';
import { Slider } from '@mui/material';
import { Switch } from '@mui/material';

const CustomSlider = styled(Slider)(({ theme }) => ({
  '& .MuiSlider-rail': {
    height: '9px',
    borderRadius: '9px',
    opacity: '1',
    backgroundColor: theme.palette.grey[200],
  },
  '& .MuiSlider-thumb': {
    borderRadius: '50%',
    backgroundColor: () => theme.palette.secondary.main,
    width: '23px',
    height: '23px',
  },
  '& .MuiSlider-track': {
    height: '9px',
    borderRadius: '9px',
  },
}));

const CustomSwitch = styled((props: any) => <Switch {...props} />)(({ theme }) => ({
  '&.MuiSwitch-root': {
    width: '68px',
    height: '49px',
  },
  '&  .MuiButtonBase-root': {
    top: '6px',
    left: '6px',
  },
  '&  .MuiButtonBase-root.Mui-checked .MuiSwitch-thumb': {
    backgroundColor: 'primary.main',
  },
  '& .MuiSwitch-thumb': {
    width: '18px',
    height: '18px',
    borderRadius: '6px',
  },

  '& .MuiSwitch-track': {
    backgroundColor: theme.palette.grey[200],
    opacity: 1,
    borderRadius: '5px',
  },
  '& .MuiSwitch-switchBase': {
    '&.Mui-checked': {
      '& + .MuiSwitch-track': {
        backgroundColor: 'primary',
        opacity: 0.18,
      },
    },
  },
}));

const Settings = () => {
  const [value3, setValue3] = React.useState(45);
  const handleChange6 = (event: any, newValue: any) => {
    setValue3(newValue);
  };

  return (
    <Card>
      <CardContent sx={{p: "30px"}}>
        <Typography variant="h5">Settings</Typography>
        <Stack spacing={2} mt={3}>
          <Stack direction="row" spacing={2}>
            <Avatar variant="rounded" sx={{ bgcolor: 'primary.main', width: 48, height: 48 }}>
              <IconVolume width={22} />
            </Avatar>
            <Box width="100%">
              <Box display="flex" alignItems="center" justifyContent="space-between">
                <Typography variant="h6">Sound</Typography>
                <Typography variant="subtitle2" color="textSecondary">
                  45%
                </Typography>
              </Box>
              <CustomSlider aria-label="Volume" value={value3} onChange={handleChange6} />
            </Box>
          </Stack>
          <Divider />
          <Stack direction="row" spacing={2}>
            <Avatar variant="rounded" sx={{ bgcolor: 'secondary.main', width: 48, height: 48 }}>
              <IconMessage width={22} />
            </Avatar>
            <Box display="flex" alignItems="center" justifyContent="space-between" width="100%">
              <Box>
                <Typography variant="h6" mb={1}>Chat</Typography>
                <Typography variant="subtitle2" color="textSecondary">
                  Turn on chat during call
                </Typography>
              </Box>
              <Box>
                <CustomSwitch />
              </Box>
            </Box>
          </Stack>
          <Divider />
        </Stack>
        <Stack direction="row" justifyContent="end" spacing={2} mt={2}>
            <Button variant="outlined" color="error">Cancel</Button>
            <Button variant="contained" color="primary">Save</Button>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default Settings;
`})}),Ke=()=>{const[r,n]=u.useState(45),t=(s,p)=>{n(p)};return e.jsx(d,{title:"Settings",codeModel:e.jsx(qe,{}),children:e.jsxs(h,{sx:{p:"30px"},children:[e.jsx(o,{variant:"h5",children:"Settings"}),e.jsxs(i,{spacing:2,mt:3,children:[e.jsxs(i,{direction:"row",spacing:2,children:[e.jsx(l,{variant:"rounded",sx:{bgcolor:"primary.main",width:48,height:48},children:e.jsx(ye,{width:22})}),e.jsxs(c,{width:"100%",children:[e.jsxs(c,{display:"flex",alignItems:"center",justifyContent:"space-between",children:[e.jsx(o,{variant:"h6",children:"Sound"}),e.jsx(o,{variant:"subtitle2",color:"textSecondary",children:"45%"})]}),e.jsx(Se,{"aria-label":"Volume",value:r,onChange:t})]})]}),e.jsx(T,{}),e.jsxs(i,{direction:"row",spacing:2,children:[e.jsx(l,{variant:"rounded",sx:{bgcolor:"secondary.main",width:48,height:48},children:e.jsx(je,{width:22})}),e.jsxs(c,{display:"flex",alignItems:"center",justifyContent:"space-between",width:"100%",children:[e.jsxs(c,{children:[e.jsx(o,{variant:"h6",mb:1,children:"Chat"}),e.jsx(o,{variant:"subtitle2",color:"textSecondary",children:"Turn on chat during call"})]}),e.jsx(c,{children:e.jsx(ke,{})})]})]}),e.jsx(T,{})]}),e.jsxs(i,{direction:"row",justifyContent:"end",spacing:2,mt:2,children:[e.jsx(x,{variant:"outlined",color:"error",children:"Cancel"}),e.jsx(x,{variant:"contained",color:"primary",children:"Save"})]})]})})},We=()=>e.jsx(e.Fragment,{children:e.jsx(m,{children:`
import { CardContent, Typography, Grid, Button, CardMedia, IconButton, Card } from '@mui/material';
import { Stack } from '@mui/system';
import { IconGift } from '@tabler/icons';

const giftCard = [
  {
    title: 'Andrew Grant',
    avatar: "/images/products/s1.jpg",
  },
  {
    title: 'Leo Pratt',
    avatar: "/images/products/s2.jpg",
  },
];

const GiftCard = () => {
  return (
    <Grid container spacing={3}>
      {giftCard.map((card, index) => (
        <Grid item xs={12} sm={6} key={index}>
          <Card>
            <CardContent>
              <Stack direction="row" alignItems="center" justifyContent="space-between" spacing={2}>
                <Typography variant="h6" mb={1}>
                  {card.title}
                </Typography>

                <IconButton color="secondary">
                  <IconGift width={20} />
                </IconButton>
              </Stack>
              <CardMedia component="img" image={card.avatar} sx={{ height: 160, borderRadius: 2 }} />

              <Stack spacing={2} mt={3}>
                <Button size="large" variant="contained" color="primary">
                  Gift to Friend ($50.00)
                </Button>
              </Stack>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default GiftCard;
`})}),_e=[{title:"Andrew Grant",avatar:W},{title:"Leo Pratt",avatar:_}],Ze=()=>{const[r,n]=u.useState(!0);return C.useEffect(()=>{const t=setTimeout(()=>{n(!1)},700);return()=>clearTimeout(t)},[]),e.jsx(d,{title:"Gift Card",codeModel:e.jsx(We,{}),children:e.jsx(a,{container:!0,spacing:3,children:_e.map((t,s)=>e.jsx(a,{item:!0,xs:12,sm:6,children:e.jsx(y,{children:e.jsxs(h,{children:[e.jsxs(i,{direction:"row",alignItems:"center",justifyContent:"space-between",spacing:2,children:[e.jsx(o,{variant:"h6",mb:1,children:t.title}),e.jsx(j,{color:"secondary",children:e.jsx(Ce,{width:20})})]}),r?e.jsx(f,{variant:"square",animation:"wave",width:"100%",height:160}):e.jsx(B,{component:"img",image:t.avatar,sx:{height:160,borderRadius:2}}),e.jsx(i,{spacing:2,mt:3,children:e.jsx(x,{size:"large",variant:"contained",color:"primary",children:"Gift to Friend ($50.00)"})})]})})},s))})})},Qe=[{to:"/",title:"Home"},{title:"Cards"}],ar=()=>e.jsxs(Q,{title:"Cards",description:"this is Cards page",children:[e.jsx(Z,{title:"Cards",items:Qe}),e.jsxs(a,{container:!0,spacing:3,children:[e.jsx(a,{item:!0,xs:12,children:e.jsx(te,{})}),e.jsx(a,{item:!0,xs:12,children:e.jsx(Ae,{})}),e.jsx(a,{item:!0,xs:12,children:e.jsx(Le,{})}),e.jsx(a,{item:!0,xs:12,children:e.jsx(Fe,{})}),e.jsx(a,{item:!0,xs:12,children:e.jsx(Je,{})}),e.jsx(a,{item:!0,xs:12,children:e.jsx($e,{})}),e.jsx(a,{item:!0,xs:12,children:e.jsx(Xe,{})}),e.jsx(a,{item:!0,xs:12,sm:6,lg:4,children:e.jsx(Ke,{})}),e.jsx(a,{item:!0,xs:12,lg:8,children:e.jsx(Ze,{})}),e.jsx(a,{item:!0,xs:12,sm:6,lg:4,children:e.jsx(Y,{})}),e.jsx(a,{item:!0,xs:12,sm:6,lg:4,children:e.jsx(Be,{})}),e.jsx(a,{item:!0,xs:12,sm:6,lg:4,children:e.jsx(ee,{})})]})]});export{ar as default};
