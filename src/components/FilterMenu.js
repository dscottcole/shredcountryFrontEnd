import React from 'react'
import { Form, Input } from 'semantic-ui-react'

class FilterMenu extends React.Component{
    render() {
        return (
            <div class="filter-menu">
                <Form>
                <Input onChange={e => this.props.searchBikes(e)} icon='search' placeholder='Search Manufacturer' />
                </Form>

                <Form >
                {/* <p></p> */}
                <Form.Group onChange={e => this.props.sizeSelection(e.target.value)} widths='equal'>
                <Form.Field label='Filter By Frame Size' control='select'>
                    <option name="" value=''>No Filter</option>
                    <option name="S" value='S'>S</option>
                    <option name="M" value='M'>M</option>
                    <option name="L" value='L'>L</option>
                    <option name="XL" value='XL'>XL</option>
                </Form.Field>
                </Form.Group>
                {/* <Form.Group onChange={e => this.props.sizeSelection(e)} grouped>
                <label>HTML radios</label>
                <Form.Field
                    label='S'
                    control='input'
                    type='radio'
                    name='S'
                />
                <Form.Field
                    label='M'
                    control='input'
                    type='radio'
                    name='M'
                />
                </Form.Group> */}
                {/* <Form.Group grouped>
                <label>Filter By Frame Size</label>
                    <Form.Field name="S" label='S' control='input' type='checkbox' />
                    <Form.Field name="M" label='M' control='input' type='checkbox' />
                    <Form.Field name="L" label='L' control='input' type='checkbox' />
                    <Form.Field name="XL" label='XL' control='input' type='checkbox' />
                </Form.Group> */}
                {/* <Form.Field label='An HTML <textarea>' control='textarea' rows='3' /> */}
                {/* <Form.Field label='An HTML <button>' control='button'>
                HTML Button
                </Form.Field> */}
            </Form>
          </div>
        )
    }
}

export default FilterMenu