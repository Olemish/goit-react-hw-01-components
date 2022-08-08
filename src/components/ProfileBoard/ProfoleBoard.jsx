import PropTypes from 'prop-types';
import css from './ProfoleBoard.module.css';
import { UserCard } from 'components/Profile/Profile';
import { Profiler } from 'react';
import userEvent from '@testing-library/user-event';
import User from '../../user.json'


export const ProfileBoard = ({ profile }) => {
    
    return (
        <div className={css.ProfileBoard}>
            <UserCard profile = {profile} />     
        </div>
   
    )
  
}