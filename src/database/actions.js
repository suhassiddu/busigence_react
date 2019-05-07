import axios from 'axios'

const base_url = 'https://suhasbusigence.herokuapp.com'
const config = { 
    headers: {
        'Content-Type': 'multipart/form-data',
        'Access-Control-Allow-Origin': '*'
    }
}

export const update_schema = data => dispatch => {
    const form_data = new FormData()
    form_data.append('mysql_host', data.mysql_host)
    form_data.append('mysql_user', data.mysql_user)
    form_data.append('mysql_passwd', data.mysql_passwd)
    dispatch({
        type: 'UPDATE_MYSQLFORM',
        payload: {
            mysql_host: data.mysql_host,
            mysql_user: data.mysql_user,
            mysql_passwd: data.mysql_passwd
        }
    })
    return axios({
        method: 'post',
        url: base_url + '/database2schema/',
        data: form_data,
        config: config
    })
    .then(res => {
        dispatch({
            type: 'UPDATE_SCHEMA',
            payload: Object.assign([], res.data)
        })
    })
    .catch(err => console.log(err))
}

export const update_column = data => dispatch => {
    const form_data = new FormData()
    form_data.append('mysql_host', data.mysql_host)
    form_data.append('mysql_user', data.mysql_user)
    form_data.append('mysql_passwd', data.mysql_passwd)
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
        url: base_url + '/database2head/',
        data: form_data,
        config: config
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
    form_data.append('mysql_host', data.mysql_host)
    form_data.append('mysql_user', data.mysql_user)
    form_data.append('mysql_passwd', data.mysql_passwd)
    form_data.append('left_column', data.left_column)
    form_data.append('right_column', data.right_column)
    form_data.append('join_type', data.join_type)
    form_data.append('sort_column', data.sort_column)
    form_data.append('sort_type', data.sort_type)
    form_data.append('downloadable', data.downloadable)
    if(Boolean(data.downloadable)){
        return axios({
            method: 'post',
            url: base_url + '/databasetransform/',
            data: form_data,
            responseType: 'blob',
            config: config
        })
        .then(res => {
            const url = window.URL.createObjectURL(new Blob([res.data]))
            const link = document.createElement('a')
            link.href = url
            link.setAttribute('download', 'databasetransform.csv')
            document.body.appendChild(link)
            link.click()
        })
        .catch(err => console.log(err))
    }
    else{
        return axios({
            method: 'post',
            url: base_url + '/databasetransform/',
            data: form_data,
            config: config
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

export const on_update_schema = dispatch => ({
    on_update_schema: form_data => {
        dispatch(update_schema(form_data))
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
