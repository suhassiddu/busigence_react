import axios from 'axios'

const base_url = 'https://suhasbusigence.herokuapp.com'
const config = { 
    headers: {
        'Content-Type': 'multipart/form-data',
        'Access-Control-Allow-Origin': '*'
    }
}

export const update_csvhead = data => dispatch => {
    const form_data = new FormData()
    form_data.append('csv_files', data.left_file)
    form_data.append('csv_files', data.right_file)
    dispatch({
        type: 'UPDATE_CSVFORM',
        payload: {
            left_file: data.left_file,
            right_file: data.right_file
        }
    })
    return axios({
        method: 'post',
        url: base_url + '/csv2head/',
        data: form_data,
        config
    })
    .then(res => {
        dispatch({
            type: 'UPDATE_CSVHEAD',
            payload: Object.assign({}, res.data)
        })
    })
    .catch(err => console.log(err))
}

export const update_column = data => dispatch => {
    const form_data = new FormData()
    form_data.append('csv_files', data.left_file)
    form_data.append('csv_files', data.right_file)
    form_data.append('left_column', data.left_column)
    form_data.append('right_column', data.right_column)
    form_data.append('join_type', data.join_type)
    dispatch({
        type: 'UPDATE_JOINFORM',
        payload: {
            left_column: data.left_column,
            right_column: data.right_column,
            join_type: data.join_type
        }
    })
    return axios({
        method: 'post',
        url: base_url + '/csv2joinhead/',
        data: form_data,
        config
    })
    .then(res => {
        dispatch({
            type: 'UPDATE_COLUMN',
            payload: Object.assign([], res.data)
        })
    })
    .catch(err => console.log(err))
}

export const update_table = data => dispatch => {
    const form_data = new FormData()
    form_data.append('csv_files', data.left_file)
    form_data.append('csv_files', data.right_file)
    form_data.append('left_column', data.left_column)
    form_data.append('right_column', data.right_column)
    form_data.append('join_type', data.join_type)
    form_data.append('sort_column', data.sort_column)
    form_data.append('sort_type', data.sort_type)
    form_data.append('downloadable', data.downloadable)
    if(Boolean(data.downloadable)){
        return axios({
            method: 'post',
            url: base_url + '/csvtransform/',
            data: form_data,
            responseType: 'blob',
            config
        })
        .then(res => {
            const url = window.URL.createObjectURL(new Blob([res.data]))
            const link = document.createElement('a')
            link.href = url
            link.setAttribute('download', 'csvtransform.csv')
            document.body.appendChild(link)
            link.click()
        })
        .catch(err => console.log(err))
    }
    else{
        return axios({
            method: 'post',
            url: base_url + '/csvtransform/',
            data: form_data,
            config
        })
        .then(res => {
            dispatch({
                type: 'UPDATE_TABLE',
                payload: res.data
            })
        })
        .catch(err => console.log(err))
    }
}

export const on_update_csvhead = dispatch => ({
    on_update_csvhead: form_data => {
        dispatch(update_csvhead(form_data))
    }
})

export const on_update_column = dispatch => ({
    on_update_column: form_data => {
        dispatch(update_column(form_data))
    }
})

export const on_update_table = dispatch => ({
    on_update_table: form_data => {
        dispatch(update_table(form_data))
    }
})
