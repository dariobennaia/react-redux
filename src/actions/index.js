export const sendFormData = (data = { actions: [], data: [] }) => {
    return {
        type: 'SEND_FORM',
        actions: data.actions,
        data: data.data
    }
}