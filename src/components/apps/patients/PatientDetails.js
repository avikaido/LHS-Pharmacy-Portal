import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Box,
  Button,
  TextField,
  Typography,
  Avatar,
  Divider,
  IconButton,
  Chip,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TableContainer,
  Stack,
  Grid,
  Tooltip,
} from '@mui/material';
import {
  isEdit,
  UpdatePatient,
  DeletePatient,
  toggleStarredPatient,
} from 'src/store/apps/patients/PatientSlice';

import BlankCard from '../../shared/BlankCard';
import { IconPencil, IconStar, IconTrash, IconDeviceFloppy } from '@tabler/icons';
import Scrollbar from 'src/components/custom-scroll/Scrollbar';
import emailIcon from 'src/assets/images/breadcrumb/emailSv.png';
import { format, isValid, parseISO } from 'date-fns';

const PatientDetails = () => {
  const patientDetail = useSelector(
    (state) => state.patientsReducer.patients[state.patientsReducer.patientContent - 1],
  );
  const editPatient = useSelector((state) => state.patientsReducer.editPatient);
  const dispatch = useDispatch();

  const tableData = [
    { id: 1, title: 'First Name', alias: 'firstname', gdata: patientDetail?.firstname || '', type: 'text' },
    { id: 2, title: 'Middle Initial', alias: 'middleInitial', gdata: patientDetail?.middleInitial || '', type: 'text' },
    { id: 3, title: 'Last Name', alias: 'lastname', gdata: patientDetail?.lastname || '', type: 'text' },
    { id: 4, title: 'Date of Birth', alias: 'dob', gdata: patientDetail?.dob || '', type: 'text' },
    { id: 5, title: 'Gender', alias: 'gender', gdata: patientDetail?.gender || '', type: 'text' },
    { id: 6, title: 'Email', alias: 'email', gdata: patientDetail?.email || '', type: 'email' },
    { id: 7, title: 'Phone', alias: 'phone', gdata: patientDetail?.phone || '', type: 'phone' },
    { id: 8, title: 'Address', alias: 'address', gdata: patientDetail?.address || '', type: 'text' },
    { id: 9, title: 'Address Line 2', alias: 'address2', gdata: patientDetail?.address2 || '', type: 'text' },
    { id: 10, title: 'City', alias: 'city', gdata: patientDetail?.city || '', type: 'text' },
    { id: 11, title: 'State', alias: 'state', gdata: patientDetail?.state || '', type: 'text' },
    { id: 12, title: 'Zip Code', alias: 'zipcode', gdata: patientDetail?.zipcode || '', type: 'text' },
    { id: 13, title: 'Primary Insurance', alias: 'insurance1', gdata: patientDetail?.insurance1 || '', type: 'text' },
    { id: 14, title: 'Primary Insurance Member ID', alias: 'insurance1id', gdata: patientDetail?.insurance1id || '', type: 'text' },
    { id: 15, title: 'Secondary Insurance', alias: 'insurance2', gdata: patientDetail?.insurance2 || '', type: 'text' },
    { id: 16, title: 'Secondary Insurance Member ID', alias: 'insurance2id', gdata: patientDetail?.insurance2id || '', type: 'text' },
    { id: 17, title: 'Notes', alias: 'notes', gdata: patientDetail?.notes || '', type: 'text' },
    { id: 18, title: 'Requests', alias: 'requests', gdata: patientDetail?.requests.join(', ') || '', type: 'text' },
  ];

  const requestsTableData = [
  {
    id: 101,
    pharmacyname: 'CVS Pharmacy #123',
    doctorname: 'Andrew Albright',
    orderitem: 'Dapagliflozin',
    orderDate: new Date(),
    status: 'Processing',
  },
  {
    id: 102,
    pharmacyname: 'Walgreens #456',
    doctorname: 'David Patel',
    orderitem: 'Lisinopril',
    orderDate: new Date(),
    status: 'Complete',
  },
];

const requests = requestsTableData;

const orderDate = requestsTableData.orderDate
    ? isValid(parseISO(requestsTableData.orderDate))
      ? format(parseISO(requestsTableData.orderDate), 'MM/dd/yyyy hh:mm')
      : 'Invalid Date'
    : format(new Date(), 'MM/dd/yyyy hh:mm');

  return (
    <>
      {/* ------------------------------------------- */}
      {/* Patient Detail Part */}
      {/* ------------------------------------------- */}
      {patientDetail && !patientDetail.deleted ? (
        <>
          {/* ------------------------------------------- */}
          {/* Header Part */}
          {/* ------------------------------------------- */}
          <Box p={3} py={2} display={'flex'} alignItems="center">
            <Typography variant="h5">Patient Details</Typography>
            <Stack gap={0} direction="row" ml={'auto'}>
              {/* ------------------------------------------- */}
              {/* Disabled - Favorites - V1.0 */}
              {/* <Tooltip title={patientDetail.starred ? 'Unstar' : 'Star'}>
                <IconButton onClick={() => dispatch(toggleStarredPatient(patientDetail.id))}>
                  <IconStar
                    stroke={1.3}
                    size="18"
                    style={{
                      fill: patientDetail.starred ? '#FFC107' : '',
                      stroke: patientDetail.starred ? '#FFC107' : '',
                    }}
                  />
                </IconButton>
              </Tooltip>*/}
              {/* ------------------------------------------- */}
              <Tooltip title={editPatient ? 'Save' : 'Edit'}>
                <IconButton onClick={() => dispatch(isEdit())}>
                  {!editPatient ? (
                    <IconPencil size="18" stroke={1.3} />
                  ) : (
                    <IconDeviceFloppy size="18" stroke={1.3} />
                  )}
                </IconButton>
              </Tooltip>
              <Tooltip title="Delete">
                <IconButton>
                  <IconTrash size="18" stroke={1.3} />
                </IconButton>
              </Tooltip>
            </Stack>
          </Box>
          <Divider />
          {/* ------------------------------------------- */}
          {/* Patient Table Part */}
          {/* ------------------------------------------- */}
          <Box sx={{ overflow: 'auto' }}>
            {!editPatient ? (
              <Box>
                <Box p={3}>
                  <Box display="flex" alignItems="center">
                   {/* ------------------------------------------- */}
                    {/* Disabled - Avatar - V1.0 */}
                    {/*<Avatar
                      alt={pharmacyDetail.image}
                      src={pharmacyDetail.image}
                      sx={{ width: '72px', height: '72px' }}
                    />*/}
                    {/* ------------------------------------------- */}
                    <Box sx={{ ml: 2 }}>
                      <Typography variant="h6" mb={0.5}>
                        {patientDetail.firstname} {patientDetail.middleInitial} {patientDetail.lastname}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" mb={0.5}>
                        {patientDetail.dob}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" mb={0.5}>
                        {patientDetail.gender}
                      </Typography>
                    </Box>
                  </Box>
                  <Grid container>
                    <Grid item lg={6} xs={12} mt={4}>
                      <Typography variant="body2" color="text.secondary">
                        Phone Number
                      </Typography>
                      <Typography variant="subtitle1" mb={0.5} fontWeight={600}>
                        {patientDetail.phone}
                      </Typography>
                    </Grid>
                    <Grid item lg={6} xs={12} mt={4}>
                      <Typography variant="body2" color="text.secondary">
                        Email Address
                      </Typography>
                      <Typography variant="subtitle1" fontWeight={600} mb={0.5}>
                        {patientDetail.email}
                      </Typography>
                    </Grid>
                    <Grid item lg={6} xs={12} mt={4}>
                      <Typography variant="body2" color="text.secondary">
                        Address
                      </Typography>
                      <Typography variant="subtitle1" fontWeight={600} mb={0.5}>
                        {patientDetail.address}
                      </Typography>
                    </Grid>
                    <Grid item lg={6} xs={12} mt={4}>
                      <Typography variant="body2" color="text.secondary">
                        Address 2
                      </Typography>
                      <Typography variant="subtitle1" fontWeight={600} mb={0.5}>
                        {patientDetail.address2}
                      </Typography>
                    </Grid>
                    <Grid item lg={6} xs={12} mt={4}>
                      <Typography variant="body2" color="text.secondary">
                        City
                      </Typography>
                      <Typography variant="subtitle1" fontWeight={600} mb={0.5}>
                        {patientDetail.city}
                      </Typography>
                    </Grid>
                    <Grid item lg={6} xs={12} mt={4}>
                      <Typography variant="body2" color="text.secondary">
                        State
                      </Typography>
                      <Typography variant="subtitle1" fontWeight={600} mb={0.5}>
                        {patientDetail.state}
                      </Typography>
                    </Grid>
                    <Grid item lg={6} xs={12} mt={4}>
                      <Typography variant="body2" color="text.secondary">
                        Zipcode
                      </Typography>
                      <Typography variant="subtitle1" fontWeight={600} mb={0.5}>
                        {patientDetail.zipcode}
                      </Typography>
                    </Grid>
                    <Grid item lg={6} xs={12} mt={4}>
                      <Typography variant="body2" color="text.secondary">
                        Primary Insurance
                      </Typography>
                      <Typography variant="subtitle1" fontWeight={600} mb={0.5}>
                        {patientDetail.insurance1}
                      </Typography>
                    </Grid>
                    <Grid item lg={6} xs={12} mt={4}>
                      <Typography variant="body2" color="text.secondary">
                        Primary Insurance Member ID
                      </Typography>
                      <Typography variant="subtitle1" fontWeight={600} mb={0.5}>
                        {patientDetail.insurance1id}
                      </Typography>
                    </Grid>
                    <Grid item lg={6} xs={12} mt={4}>
                      <Typography variant="body2" color="text.secondary">
                        Secondary Insurance
                      </Typography>
                      <Typography variant="subtitle1" fontWeight={600} mb={0.5}>
                        {patientDetail.insurance2}
                      </Typography>
                    </Grid>
                    <Grid item lg={6} xs={12} mt={4}>
                      <Typography variant="body2" color="text.secondary">
                        Secondary Insurance Member ID
                      </Typography>
                      <Typography variant="subtitle1" fontWeight={600} mb={0.5}>
                        {patientDetail.insurance2id}
                      </Typography>
                    </Grid>
                    <Grid item lg={12} xs={12} mt={4}>
                      <Typography variant="body2" color="text.secondary">
                        Notes
                      </Typography>
                      <Typography variant="subtitle1" fontWeight={600} mb={0.5}>
                        {patientDetail.notes}
                      </Typography>
                    </Grid>
                    <Grid item lg={12} xs={12} mt={4}>
                      <Typography variant="body2" color="text.secondary">
                        Requests
                      </Typography>

                      <Paper variant="outlined">
                      <TableContainer >
                      <Table
                        aria-label="simple table"
                        sx={{
                          whiteSpace: 'nowrap',
                        }}
                      >
                        <TableHead>
                          <TableRow>
                            <TableCell>
                              <Typography variant="h6">ID</Typography>
                            </TableCell>
                            <TableCell>
                              <Typography variant="h6">Date/Time</Typography>
                            </TableCell>
                            <TableCell>
                              <Typography variant="h6">Item</Typography>
                            </TableCell>
                            <TableCell>
                              <Typography variant="h6">Pharmacy</Typography>
                            </TableCell>
                            <TableCell>
                              <Typography variant="h6">Physician</Typography>
                            </TableCell>
                            <TableCell>
                              <Typography variant="h6">Status</Typography>
                            </TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {requests.map((request) => (
                            <TableRow key={request.id}>
                              <TableCell>
                                <Typography variant="h6" fontWeight="600">
                                  {request.id}
                                </Typography>
                              </TableCell>
                              <TableCell>
                                <Chip size="small" color="secondary" variant="outlined" label={orderDate}></Chip>
                              </TableCell>
                              <TableCell>
                                <Typography color="textSecondary" variant="subtitle2">{request.orderitem}</Typography>
                              </TableCell>
                              <TableCell>
                                <Typography color="textSecondary" variant="subtitle2">
                                  {request.pharmacyname}
                                </Typography>
                              </TableCell>
                              <TableCell>
                                <Typography color="textSecondary" variant="subtitle2">{request.doctorname}</Typography>
                              </TableCell>
                              <TableCell>
                                <Typography color="textSecondary" variant="subtitle2">
                                  {request.status === 'Processing' ? (
                                    <Chip color="primary" label={request.status} size="small" />
                                  ) : request.status === 'Complete' ? (
                                    <Chip color="success" label={request.status} size="small" />
                                  ) : request.status === 'Created' ? (
                                    <Chip color="warning" label={request.status} size="small" />
                                  ) : (
                                    ''
                                  )}
                                </Typography>
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </TableContainer>
                    </Paper>
                    </Grid>
                  </Grid>
                </Box>
                <Divider />
                <Box p={3} gap={1} display="flex">
                  <Button
                    color="primary"
                    variant="contained"
                    size="small"
                    onClick={() => dispatch(isEdit())}
                  >
                    Edit
                  </Button>
                  <Button
                    color="error"
                    variant="contained"
                    size="small"
                    onClick={() => dispatch(DeletePatient(patientDetail.id))}
                  >
                    Delete
                  </Button>
                </Box>
              </Box>
            ) : (
              <>
                <BlankCard sx={{ p: 0 }}>
                  <Scrollbar sx={{ height: { lg: 'calc(100vh - 360px)', md: '100vh' } }}>
                    <Box pt={1}>
                      {tableData.map((data) => (
                        <Box key={data.id} px={3} py={1.5}>
                          <Typography variant="subtitle1" fontWeight={600} mb={0.5}>
                            {data.title}
                          </Typography>
                          <TextField
                            id={data.alias}
                            size="small"
                            fullWidth
                            type={data.type}
                            value={data.gdata}
                            onChange={(e) =>
                              dispatch(UpdatePatient(patientDetail.id, data.alias, e.target.value))
                            }
                          />
                        </Box>
                      ))}
                      <Box p={3}>
                        <Button
                          color="primary"
                          variant="contained"
                          onClick={() => dispatch(isEdit())}
                        >
                          Save Patient
                        </Button>
                      </Box>
                    </Box>
                  </Scrollbar>
                </BlankCard>
              </>
            )}
          </Box>
        </>
      ) : (
        <Box p={3} height="50vh" display={'flex'} justifyContent="center" alignItems={'center'}>
          {/* ------------------------------------------- */}
          {/* If no Patient  */}
          {/* ------------------------------------------- */}
          <Box>
            <Typography variant="h4">Please Select a Patient</Typography>
            <br />
            <img src={emailIcon} alt="Email Icon" width={'250px'} />
          </Box>
        </Box>
      )}
    </>
  );
};

export default PatientDetails;
