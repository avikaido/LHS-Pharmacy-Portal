import mock from '../mock';
import user1 from 'src/assets/images/profile/user-1.jpg';
import user2 from 'src/assets/images/profile/user-2.jpg';
import user3 from 'src/assets/images/profile/user-3.jpg';
import user4 from 'src/assets/images/profile/user-4.jpg';
import user5 from 'src/assets/images/profile/user-5.jpg';

export const PharmacistList = [
  {
    id: 1,
    firstname: 'John',
    lastname: 'Doe',
    image: user2,
    department: 'Clinical Pharmacy',
    pharmacy: 'Walgreens',
    phone: '456-485-5623',
    email: 'johndoe@pharmacy.com',
    address: '19214 110th Rd, Saint Albans, NY, 11412',
    notes: 'Specializes in oncology medication management',
    deaNumber: 'AB1234567',
    licenseNumber: 'PH12345',
    licenseExpiration: '2025-06-30',
    npiNumber: '1234567890',
    yearsOfExperience: 15,
    languagesSpoken: ['English', 'Spanish'],
    frequentlycontacted: true,
    starred: true,
    deleted: false
  },
  {
    id: 2,
    firstname: 'Jane',
    lastname: 'Smith',
    image: user3,
    department: 'Retail Pharmacy',
    pharmacy: 'CVS Health',
    phone: '999-895-9652',
    email: 'janesmith@cvs.com',
    address: '76 Hamilton Ave, Yonkers, NY, 10705',
    notes: 'Focus on chronic disease management',
    deaNumber: 'AC9876543',
    licenseNumber: 'PH67890',
    licenseExpiration: '2026-03-15',
    npiNumber: '9876543210',
    yearsOfExperience: 10,
    languagesSpoken: ['English'],
    frequentlycontacted: false,
    starred: false,
    deleted: false
  },
  {
    id: 3,
    firstname: 'Albert',
    lastname: 'Johnson',
    image: user4,
    department: 'Compounding Pharmacy',
    pharmacy: 'Custom Rx',
    phone: '789-854-8950',
    email: 'ajohnson@customrx.com',
    address: '930 Fruit Ave, Farrell, PA, 16121',
    notes: 'Expert in sterile compounding',
    deaNumber: 'BC7654321',
    licenseNumber: 'PH09876',
    licenseExpiration: '2024-11-22',
    npiNumber: '3456789012',
    yearsOfExperience: 8,
    languagesSpoken: ['English', 'French'],
    frequentlycontacted: true,
    starred: false,
    deleted: false
  },
  {
    id: 4,
    firstname: 'Emily',
    lastname: 'Clark',
    image: user5,
    department: 'Clinical Pharmacy',
    pharmacy: 'Kaiser Permanente',
    phone: '452-652-5230',
    email: 'eclark@kp.org',
    address: '19103 Stefani Ave, Cerritos, CA, 90703',
    notes: 'Specializes in pediatrics',
    deaNumber: 'CD6543210',
    licenseNumber: 'PH54321',
    licenseExpiration: '2023-09-01',
    npiNumber: '5678901234',
    yearsOfExperience: 12,
    languagesSpoken: ['English'],
    frequentlycontacted: false,
    starred: true,
    deleted: true
  },
  {
    id: 5,
    firstname: 'David',
    lastname: 'Brown',
    image: user1,
    department: 'Hospital Pharmacy',
    pharmacy: 'Mount Sinai Hospital',
    phone: '985-985-7850',
    email: 'dbrown@mountsinai.com',
    address: '3059 Edgewood Park Ct, Commerce Township, MI',
    notes: 'Focus on emergency medicine',
    deaNumber: 'EF6543219',
    licenseNumber: 'PH23456',
    licenseExpiration: '2027-01-12',
    npiNumber: '6543210987',
    yearsOfExperience: 18,
    languagesSpoken: ['English', 'German'],
    frequentlycontacted: false,
    starred: false,
    deleted: false
  },
  {
    id: 6,
    firstname: 'Sophia',
    lastname: 'Davis',
    image: user2,
    department: 'Retail Pharmacy',
    pharmacy: 'Rite Aid',
    phone: '230-541-5231',
    email: 'sdavis@riteaid.com',
    address: '1330 N Douglas Ave, Arlington Heights, IL',
    notes: 'Chronic care management specialist',
    deaNumber: 'FG8765432',
    licenseNumber: 'PH76543',
    licenseExpiration: '2025-07-25',
    npiNumber: '1230987654',
    yearsOfExperience: 14,
    languagesSpoken: ['English'],
    frequentlycontacted: true,
    starred: false,
    deleted: true
  },
  {
    id: 7,
    firstname: 'Olivia',
    lastname: 'Miller',
    image: user3,
    department: 'Retail Pharmacy',
    pharmacy: 'CVS Health',
    phone: '478-582-6520',
    email: 'omiller@cvs.com',
    address: '180 Topp Ln, Tupelo, MS',
    notes: 'Specializes in patient education',
    deaNumber: 'GH9876543',
    licenseNumber: 'PH76544',
    licenseExpiration: '2026-08-18',
    npiNumber: '1239876543',
    yearsOfExperience: 7,
    languagesSpoken: ['English', 'Spanish'],
    frequentlycontacted: false,
    starred: false,
    deleted: true
  },
  {
    id: 8,
    firstname: 'Noah',
    lastname: 'Williams',
    image: user4,
    department: 'Hospital Pharmacy',
    pharmacy: 'Cedars-Sinai Medical Center',
    phone: '123-652-2301',
    email: 'nwilliams@cedars-sinai.com',
    address: '33 Caraway Rd, Reisterstown, MD',
    notes: 'Focus on critical care pharmacy',
    deaNumber: 'HI8765432',
    licenseNumber: 'PH65432',
    licenseExpiration: '2025-12-10',
    npiNumber: '6540987654',
    yearsOfExperience: 11,
    languagesSpoken: ['English'],
    frequentlycontacted: true,
    starred: true,
    deleted: true
  },
  {
    id: 9,
    firstname: 'Liam',
    lastname: 'Jones',
    image: user5,
    department: 'Clinical Pharmacy',
    pharmacy: 'Mayo Clinic',
    phone: '652-452-6521',
    email: 'ljones@mayoclinic.org',
    address: '#RR, Bruceton Mills, WV',
    notes: 'Expert in cardiology medication',
    deaNumber: 'IJ7654321',
    licenseNumber: 'PH54322',
    licenseExpiration: '2024-04-28',
    npiNumber: '0987654321',
    yearsOfExperience: 13,
    languagesSpoken: ['English', 'French'],
    frequentlycontacted: false,
    starred: true,
    deleted: true
  },
  {
    id: 10,
    firstname: 'Emma',
    lastname: 'Taylor',
    image: user2,
    department: 'Compounding Pharmacy',
    pharmacy: 'Custom Meds',
    phone: '785-985-6541',
    email: 'etaylor@custommeds.com',
    address: '3756 Preston Street, Wichita, KS',
    notes: 'Specializes in hormone replacement therapy',
    deaNumber: 'JK6543219',
    licenseNumber: 'PH43211',
    licenseExpiration: '2027-11-02',
    npiNumber: '4321098765',
    yearsOfExperience: 9,
    languagesSpoken: ['English', 'German'],
    frequentlycontacted: false,
    starred: false,
    deleted: true
  },
  {
    id: 11,
    firstname: 'James',
    lastname: 'Anderson',
    image: user1,
    department: 'Retail Pharmacy',
    pharmacy: 'Walgreens',
    phone: '652-632-6520',
    email: 'janderson@walgreens.com',
    address: '1635 Franklin Street, Montgomery, AL',
    notes: 'Diabetes management expert',
    deaNumber: 'KL5432109',
    licenseNumber: 'PH32109',
    licenseExpiration: '2023-09-15',
    npiNumber: '7654321098',
    yearsOfExperience: 8,
    languagesSpoken: ['English'],
    frequentlycontacted: false,
    starred: false,
    deleted: true
  },
    {
    id: 12,
    firstname: 'Charlotte',
    lastname: 'Martinez',
    image: user2,
    department: 'Hospital Pharmacy',
    pharmacy: 'Stanford Health Care',
    phone: '125-985-3210',
    email: 'cmartinez@stanfordhealth.com',
    address: '2595 Pearlman Avenue, Palo Alto, CA',
    notes: 'Specializes in infectious disease pharmacotherapy',
    deaNumber: 'LM4321098',
    licenseNumber: 'PH21098',
    licenseExpiration: '2026-05-19',
    npiNumber: '8765432109',
    yearsOfExperience: 14,
    languagesSpoken: ['English', 'Spanish'],
    frequentlycontacted: true,
    starred: false,
    deleted: false
  },
  {
    id: 13,
    firstname: 'Amelia',
    lastname: 'Garcia',
    image: user3,
    department: 'Clinical Pharmacy',
    pharmacy: 'UCLA Health',
    phone: '541-521-6320',
    email: 'agarcia@uclahealth.com',
    address: '508 Virginia Street, Los Angeles, CA',
    notes: 'Pediatric specialist',
    deaNumber: 'MN3210987',
    licenseNumber: 'PH10987',
    licenseExpiration: '2024-12-30',
    npiNumber: '2109876543',
    yearsOfExperience: 6,
    languagesSpoken: ['English', 'Korean'],
    frequentlycontacted: true,
    starred: true,
    deleted: false
  },
  {
    id: 14,
    firstname: 'Mason',
    lastname: 'Hernandez',
    image: user4,
    department: 'Retail Pharmacy',
    pharmacy: 'Rite Aid',
    phone: '975-895-5240',
    email: 'mhernandez@riteaid.com',
    address: '1516 Holt Street, West Palm Beach, FL',
    notes: 'Specializes in geriatric care',
    deaNumber: 'NO2109876',
    licenseNumber: 'PH09876',
    licenseExpiration: '2025-02-14',
    npiNumber: '3210987654',
    yearsOfExperience: 5,
    languagesSpoken: ['English', 'Spanish'],
    frequentlycontacted: true,
    starred: true,
    deleted: false
  },
  {
    id: 15,
    firstname: 'Isabella',
    lastname: 'Lopez',
    image: user5,
    department: 'Hospital Pharmacy',
    pharmacy: 'Cleveland Clinic',
    phone: '874-546-6521',
    email: 'ilopez@clevelandclinic.org',
    address: '2915 Auburn Creek Ln, League City, TX',
    notes: 'Critical care specialist',
    deaNumber: 'OP0987654',
    licenseNumber: 'PH98765',
    licenseExpiration: '2026-10-21',
    npiNumber: '6543210987',
    yearsOfExperience: 12,
    languagesSpoken: ['English'],
    frequentlycontacted: false,
    starred: true,
    deleted: false
  },
  {
    id: 16,
    firstname: 'Elijah',
    lastname: 'Gonzalez',
    image: user1,
    department: 'Compounding Pharmacy',
    pharmacy: 'Precision Compounds',
    phone: '652-542-5200',
    email: 'egonzalez@precisioncompounds.com',
    address: '2725 Cottage Rd, Alpine, TX',
    notes: 'Expert in custom medication formulations',
    deaNumber: 'PQ9876543',
    licenseNumber: 'PH87654',
    licenseExpiration: '2025-06-10',
    npiNumber: '7654321098',
    yearsOfExperience: 17,
    languagesSpoken: ['English', 'French'],
    frequentlycontacted: false,
    starred: false,
    deleted: false
  },
  {
    id: 17,
    firstname: 'Lucas',
    lastname: 'Wilson',
    image: user2,
    department: 'Clinical Pharmacy',
    pharmacy: 'Johns Hopkins Hospital',
    phone: '326-984-1200',
    email: 'lwilson@jhmi.edu',
    address: '307 Hardy St, Aberdeen, MD',
    notes: 'Expert in neurology pharmacotherapy',
    deaNumber: 'QR8765432',
    licenseNumber: 'PH76543',
    licenseExpiration: '2024-11-11',
    npiNumber: '8765432109',
    yearsOfExperience: 9,
    languagesSpoken: ['English'],
    frequentlycontacted: true,
    starred: true,
    deleted: false
  },
  {
    id: 18,
    firstname: 'Sophia',
    lastname: 'Thomas',
    image: user3,
    department: 'Retail Pharmacy',
    pharmacy: 'CVS Health',
    phone: '265-632-4521',
    email: 'sthomas@cvs.com',
    address: '15919 Golf Club Dr, Crosby, TX',
    notes: 'Chronic disease management',
    deaNumber: 'RS7654321',
    licenseNumber: 'PH65432',
    licenseExpiration: '2026-01-30',
    npiNumber: '9876543210',
    yearsOfExperience: 13,
    languagesSpoken: ['English', 'Spanish'],
    frequentlycontacted: true,
    starred: true,
    deleted: false
  },
  {
    id: 19,
    firstname: 'Aiden',
    lastname: 'White',
    image: user4,
    department: 'Hospital Pharmacy',
    pharmacy: 'NewYork-Presbyterian Hospital',
    phone: '645-647-4800',
    email: 'awhite@nyp.org',
    address: 'Po Box 144, Rhome, TX',
    notes: 'Expert in oncology pharmacotherapy',
    deaNumber: 'ST6543210',
    licenseNumber: 'PH54321',
    licenseExpiration: '2024-10-05',
    npiNumber: '6543210987',
    yearsOfExperience: 15,
    languagesSpoken: ['English'],
    frequentlycontacted: false,
    starred: false,
    deleted: true
  },
  {
    id: 20,
    firstname: 'Ethan',
    lastname: 'Harris',
    image: user5,
    department: 'Retail Pharmacy',
    pharmacy: 'CVS Health',
    phone: '654-985-6520',
    email: 'eharris@cvs.com',
    address: '34 Fairview Ln, Palm Coast, FL',
    notes: 'Diabetes care and management',
    deaNumber: 'UV5432109',
    licenseNumber: 'PH43210',
    licenseExpiration: '2027-03-29',
    npiNumber: '7654321098',
    yearsOfExperience: 11,
    languagesSpoken: ['English', 'French'],
    frequentlycontacted: false,
    starred: true,
    deleted: true
  },
  {
    id: 21,
    firstname: 'Mia',
    lastname: 'Clark',
    image: user3,
    department: 'Clinical Pharmacy',
    pharmacy: 'Kaiser Permanente',
    phone: '456-652-3210',
    email: 'mclark@kp.org',
    address: '17919 Barney Dr, Accokeek, MD',
    notes: 'Expert in cardiovascular pharmacotherapy',
    deaNumber: 'WX4321098',
    licenseNumber: 'PH32109',
    licenseExpiration: '2025-06-17',
    npiNumber: '9876543210',
    yearsOfExperience: 9,
    languagesSpoken: ['English'],
    frequentlycontacted: true,
    starred: false,
    deleted: false
  },
  {
    id: 22,
    firstname: 'Ava',
    lastname: 'Lewis',
    image: user1,
    department: 'Compounding Pharmacy',
    pharmacy: 'Precision Compounds',
    phone: '459-985-4520',
    email: 'alewis@precisioncompounds.com',
    address: '14 Huntington Dr, Greenbrier, AR',
    notes: 'Expert in sterile compounding and bioidentical hormones',
    deaNumber: 'YZ3210987',
    licenseNumber: 'PH21098',
    licenseExpiration: '2026-02-12',
    npiNumber: '8765432109',
    yearsOfExperience: 14,
    languagesSpoken: ['English', 'Spanish'],
    frequentlycontacted: true,
    starred: false,
    deleted: true
  },
  {
    id: 23,
    firstname: 'Logan',
    lastname: 'Walker',
    image: user2,
    department: 'Hospital Pharmacy',
    pharmacy: 'Massachusetts General Hospital',
    phone: '645-978-4150',
    email: 'lwalker@mgh.org',
    address: '1341 Mentionville Rd, Darien, GA',
    notes: 'Pediatric pharmacotherapy specialist',
    deaNumber: 'ZA2109876',
    licenseNumber: 'PH10987',
    licenseExpiration: '2025-10-01',
    npiNumber: '6543210987',
    yearsOfExperience: 10,
    languagesSpoken: ['English', 'Portuguese'],
    frequentlycontacted: true,
    starred: false,
    deleted: true
  },
    {
    id: 24,
    firstname: 'Lucas',
    lastname: 'King',
    image: user3,
    department: 'Retail Pharmacy',
    pharmacy: 'Rite Aid',
    phone: '450-980-6520',
    email: 'lking@riteaid.com',
    address: '13 Pent Rd, Branford, CT',
    notes: 'Chronic care management and medication adherence specialist',
    deaNumber: 'AB1234567',
    licenseNumber: 'PH98765',
    licenseExpiration: '2026-07-21',
    npiNumber: '5432109876',
    yearsOfExperience: 13,
    languagesSpoken: ['English'],
    frequentlycontacted: false,
    starred: false,
    deleted: true
  },
  {
    id: 25,
    firstname: 'Harper',
    lastname: 'Scott',
    image: user4,
    department: 'Clinical Pharmacy',
    pharmacy: 'Mayo Clinic',
    phone: '120-320-4520',
    email: 'hscott@mayoclinic.org',
    address: '5791 S Staghorn Cholla Ct, Apache Junction, AZ',
    notes: 'Focus on neuropharmacology',
    deaNumber: 'BC2345678',
    licenseNumber: 'PH87654',
    licenseExpiration: '2024-11-30',
    npiNumber: '2109876543',
    yearsOfExperience: 17,
    languagesSpoken: ['English', 'Spanish'],
    frequentlycontacted: true,
    starred: true,
    deleted: true
  },
  {
    id: 26,
    firstname: 'Ella',
    lastname: 'Young',
    image: user4,
    department: 'Hospital Pharmacy',
    pharmacy: 'Mount Sinai Hospital',
    phone: '452-521-1230',
    email: 'eyoung@mountsinai.com',
    address: '69 El Molino Dr, Clayton, MO',
    notes: 'Specialist in infectious diseases',
    deaNumber: 'CD3456789',
    licenseNumber: 'PH76543',
    licenseExpiration: '2023-08-15',
    npiNumber: '4321098765',
    yearsOfExperience: 11,
    languagesSpoken: ['English'],
    frequentlycontacted: false,
    starred: false,
    deleted: true
  },
  {
    id: 27,
    firstname: 'William',
    lastname: 'Hall',
    image: user5,
    department: 'Compounding Pharmacy',
    pharmacy: 'CustomRx',
    phone: '652-452-1230',
    email: 'whall@customrx.com',
    address: '215 Waterfront Ct, Noblesville, IN',
    notes: 'Expert in compounding sterile preparations',
    deaNumber: 'DE4567890',
    licenseNumber: 'PH65432',
    licenseExpiration: '2026-04-12',
    npiNumber: '5432109876',
    yearsOfExperience: 15,
    languagesSpoken: ['English', 'German'],
    frequentlycontacted: false,
    starred: true,
    deleted: false
  },
  {
    id: 28,
    firstname: 'Grace',
    lastname: 'Allen',
    image: user1,
    department: 'Retail Pharmacy',
    pharmacy: 'Walgreens',
    phone: '963-652-1230',
    email: 'gallen@walgreens.com',
    address: '11212 Amber Rd, Manistee, MI',
    notes: 'Specializes in geriatric medication management',
    deaNumber: 'EF5678901',
    licenseNumber: 'PH54321',
    licenseExpiration: '2024-05-20',
    npiNumber: '4321098765',
    yearsOfExperience: 7,
    languagesSpoken: ['English'],
    frequentlycontacted: true,
    starred: true,
    deleted: false
  },
  {
    id: 29,
    firstname: 'Benjamin',
    lastname: 'Lopez',
    image: user2,
    department: 'Hospital Pharmacy',
    pharmacy: 'Cleveland Clinic',
    phone: '546-654-1230',
    email: 'blopez@clevelandclinic.org',
    address: '2009 W Azalea Ave, Baker, LA',
    notes: 'Oncology pharmacist specializing in chemotherapy',
    deaNumber: 'FG6789012',
    licenseNumber: 'PH43210',
    licenseExpiration: '2025-08-30',
    npiNumber: '3210987654',
    yearsOfExperience: 18,
    languagesSpoken: ['English', 'Spanish'],
    frequentlycontacted: false,
    starred: false,
    deleted: false
  },
  {
    id: 30,
    firstname: 'Chloe',
    lastname: 'Hernandez',
    image: user1,
    department: 'Clinical Pharmacy',
    pharmacy: 'UCLA Health',
    phone: '123-456-7890',
    email: 'chernandez@uclahealth.com',
    address: '203 Dawn Dr, Mount Holly, NC, 28120',
    notes: 'Clinical research specialist in pharmacology',
    deaNumber: 'GH7890123',
    licenseNumber: 'PH32109',
    licenseExpiration: '2026-09-05',
    npiNumber: '6543210987',
    yearsOfExperience: 12,
    languagesSpoken: ['English'],
    frequentlycontacted: false,
    starred: true,
    deleted: true
  }
];
mock.onGet('/api/data/pharmacists/PharmacistsData').reply(() => {
  const pharmacists = PharmacistList;
  return [200, JSON.parse(JSON.stringify(pharmacists))];
});
export default PharmacistList;