
import { render } from '@testing-library/react';
import '@testing-library/jest-dom'
import { Router, Route } from "react-router-dom";

import { createMemoryHistory } from "history";
import Category from './Category';


test('rendering text', async () => {
    const history = createMemoryHistory()
    history.push('/electronics')
    const test = render(
        <Router history={history}>
            <Route path="/:category" component={Category} />
        </Router>


    )
    const element = await test.findByText('loading')
    expect(element).toContainHTML('loading')

});
