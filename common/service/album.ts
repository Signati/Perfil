import { http } from '~/common/service/api'
import { Album } from '~/common/types/Album'
const url = 'albums_all'
export const albums = async ():Promise<Album[]> => {
  return await http.get<Album[]>(url).then(data => data.data)
}
