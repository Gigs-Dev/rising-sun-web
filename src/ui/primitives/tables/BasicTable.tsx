import React, { FC } from 'react';


interface ITable {
    columns: {
        header?: string; 
        accessor: string; 
        className?: string
    }[];
    data: any[];
    renderRow: any;
    status?: 'pending' | 'failed' | 'succeeded'
}

const BasicTable:FC<ITable> = ({columns, renderRow, data, status}) => {
  return (
    <table className='mt-4 w-full'>
        { columns &&
        <thead>
            <tr className='text-left w-full rounded-lg'>
                {columns?.map((col) => (
                    <td className={`${col.className} p-3`} key={col.accessor}>{col.header}</td>
                ))}
            </tr>
        </thead>
        }

        <tbody>
            { data?.map((item) => renderRow(item))}
            {/* <span className="flex w-full justify-center items-center m-auto">
                {status === 'pending' && 
                    <CircularProgress  sx={{display: 'flex', margin: 'auto'}}/>
                }
            </span> */}
        </tbody>
    </table>
  )
}

export default BasicTable;
