import React from 'react'
import { Form, Input } from 'semantic-ui-react'

class FilterMenu extends React.Component{
    render() {
        return (
            <div class="filter-menu">
                <p></p>
                <Form>
                <Input onChange={e => this.props.searchBikes(e.target.value)} icon='search' placeholder='Search by Manufacturer' />
                </Form>

                <Form >
                <p></p>
                <Form.Group onChange={e => this.props.sizeSelection(e.target.value)} widths='equal'>
                <Form.Field label='Filter By Frame Size:' control='select'>
                    <option name="" value=''>No Filter</option>
                    <option name="S" value='S'>S</option>
                    <option name="M" value='M'>M</option>
                    <option name="L" value='L'>L</option>
                    <option name="XL" value='XL'>XL</option>
                </Form.Field>
                </Form.Group>
                <p></p>
                <Form.Group onChange={e => this.props.typeSelection(e.target.value)} widths='equal'>
                <Form.Field label='Filter By Discipline:' control='select'>
                    <option name="" value=''>No Filter</option>
                    <option name="Cross Country" value='Cross Country'>Cross Country</option>
                    <option name="Trail" value='Trail'>Trail</option>
                    <option name="Enduro" value='Enduro'>Enduro</option>
                    <option name="Downhill" value='Downhill'>Downhill</option>
                    <option name="Gravel" value='Gravel'>Gravel</option>
                </Form.Field>
                </Form.Group>
            </Form>
          </div>
        )
    }
}

export default FilterMenu