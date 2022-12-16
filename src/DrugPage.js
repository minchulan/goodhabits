import React from 'react';
import DrugForm from './DrugForm';
import DrugList from './DrugList';
import Search from './Search';

const DrugPage = () => {
    return (
        <main>
            <DrugForm />
            <Search />
            <DrugList />
        </main>
    );
}
 
export default DrugPage;