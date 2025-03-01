import React, { useEffect } from 'react';
import { List } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import {
  SelectPharmacist,
  fetchPharmacists,
  DeletePharmacist,
  toggleStarredPharmacist,
} from '../../../store/apps/pharmacists/PharmacistSlice';

import Scrollbar from 'src/components/custom-scroll/Scrollbar';
import PharmacistListItem from './PharmacistListItem';

const PharmacistList = ({ showrightSidebar }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPharmacists());
  }, [dispatch]);

  const getVisiblePharmacists = (pharmacists, filter, pharmacistSearch) => {
    switch (filter) {
      case 'show_all':
        return pharmacists.filter(
          (c) => !c.deleted && c.firstname.toLocaleLowerCase().includes(pharmacistSearch),
        );

      case 'frequent_pharmacist':
        return pharmacists.filter(
          (c) =>
            !c.deleted &&
            c.frequentlycontacted &&
            c.firstname.toLocaleLowerCase().includes(pharmacistSearch),
        );

      case 'starred_pharmacist':
        return pharmacists.filter(
          (c) => !c.deleted && c.starred && c.firstname.toLocaleLowerCase().includes(pharmacistSearch),
        );

      case 'retail_pharmacy':
        return pharmacists.filter(
          (c) =>
            !c.deleted &&
            c.department === 'Retail Pharmacy' &&
            c.firstname.toLocaleLowerCase().includes(pharmacistSearch),
        );

      case 'compounding_pharmacy':
        return pharmacists.filter(
          (c) =>
            !c.deleted &&
            c.department === 'Compounding Pharmacy' &&
            c.firstname.toLocaleLowerCase().includes(pharmacistSearch),
        );

      case 'clinical_pharmacy':
        return pharmacists.filter(
          (c) =>
            !c.deleted &&
            c.department === 'Clinical Pharmacy' &&
            c.firstname.toLocaleLowerCase().includes(pharmacistSearch),
        );

      case 'hospital_pharmacy':
        return pharmacists.filter(
          (c) =>
            !c.deleted &&
            c.department === 'Hospital Pharmacy' &&
            c.firstname.toLocaleLowerCase().includes(pharmacistSearch),
        );

      default:
        throw new Error(`Unknown filter: ${filter}`);
    }
  };
  const pharmacists = useSelector((state) =>
    getVisiblePharmacists(
      state.pharmacistsReducer.pharmacists,
      state.pharmacistsReducer.currentFilter,
      state.pharmacistsReducer.pharmacistSearch,
    ),
  );

  const active = useSelector((state) => state.pharmacistsReducer.pharmacistContent);

  return (
    <List>
      <Scrollbar sx={{ height: { lg: 'calc(100vh - 100px)', md: '100vh' }, maxHeight: '800px' }}>
        {pharmacists.map((pharmacist) => (
          <PharmacistListItem
            key={pharmacist.id}
            active={pharmacist.id === active}
            {...pharmacist}
            onPharmacistClick={() => {
              dispatch(SelectPharmacist(pharmacist.id));
              showrightSidebar();
            }}
            onDeleteClick={() => dispatch(DeletePharmacist(pharmacist.id))}
            onStarredClick={() => dispatch(toggleStarredPharmacist(pharmacist.id))}
          />
        ))}
      </Scrollbar>
    </List>
  );
};

export default PharmacistList;
