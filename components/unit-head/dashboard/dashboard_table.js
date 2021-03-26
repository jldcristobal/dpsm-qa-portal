import React from 'react'
import { useTable, useSortBy, useFilters, usePagination } from 'react-table'

// default search box filter
function DefaultColumnFilter({
  column: { filterValue, preFilteredRows, setFilter },
}) {
  const count = preFilteredRows.length

  return (
    <input className = "form-control col-md-6"
      value={filterValue || ''}
      onChange={e => {
        setFilter(e.target.value || undefined) // Set undefined to remove the filter entirely
      }}
      placeholder={`Search ${count} records...`}
    />
  )
}

// This is a custom filter UI for selecting
// a unique option from a list
function SelectColumnFilter({
  column: { filterValue, setFilter, preFilteredRows, id },
}) {
  // Calculate the options for filtering
  // using the preFilteredRows
  const options = React.useMemo(() => {
    const options = new Set()
    preFilteredRows.forEach(row => {
      options.add(row.values[id])
    })
    return [...options.values()]
  }, [id, preFilteredRows])

  // Render a multi-select box
  return (
    <select className = "form-control col-md-6"
      value={filterValue}
      onChange={e => {
        setFilter(e.target.value || undefined)
      }}
    >
      <option value="">All</option>
      {options.map((option, i) => (
        <option key={i} value={option}>
          {option}
        </option>
      ))}
    </select>
  )
}

// the table markup
function Table ({columns, data}){
 const defaultColumn = React.useMemo(
    () => ({
      // Let's set up our default Filter UI
      Filter: DefaultColumnFilter,
    }),
    []
  )

   const {
     getTableProps,
     getTableBodyProps,
     headerGroups,
     prepareRow,
     page,
     rows, 

    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
   } = useTable({ columns, data, defaultColumn, initialState: { pageIndex: 0 } }, useFilters, useSortBy, usePagination)

 return(
<div>
   <table className = "table" {...getTableProps()}>
       <thead>
         {headerGroups.map(headerGroup => (
           <tr {...headerGroup.getHeaderGroupProps()}>
             {headerGroup.headers.map(column => (
               <th
		// sorting function
                 {...column.getHeaderProps(column.getSortByToggleProps())}
                 >
                 {column.render('Header')}
		 <span>
                    {column.isSorted
                      ? column.isSortedDesc
                        ? ' 🔽'
                        : ' 🔼'
                      : ' (click to sort)'}
                  </span>
		  <div>{column.canFilter ? column.render('Filter') : null}</div>
               </th>
             ))}
           </tr>
         ))}
       </thead>
       <tbody {...getTableBodyProps()}>
         {page.map((row, i) => {
            prepareRow(row)
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                })}
              </tr>
            )
          })}
       </tbody>
     </table>

	
     <div className="pagination">
        <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
          {'<<'}
        </button>{' '}
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
          {'<'}
        </button>{' '}
        <button onClick={() => nextPage()} disabled={!canNextPage}>
          {'>'}
        </button>{' '}
        <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
          {'>>'}
        </button>{' '}
        <span>
          Page{' '}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>{' '}
        </span>
        <span>
          | Go to page:{' '}
          <input
            type="number"
            defaultValue={pageIndex + 1}
            onChange={e => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0
              gotoPage(page)
            }}
            style={{ width: '100px' }}
          />
        </span>{' '}
        <select
          value={pageSize}
          onChange={e => {
            setPageSize(Number(e.target.value))
          }}
        >
          {[10, 20, 30, 40, 50].map(pageSize => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
      </div>
</div>
 )
  
}
 

// configure columns, populate cells, render table
 function AnalyticsTable() {
   const data = React.useMemo(
     () => [
       {
         col1: 'Cena, John',
         col2: 'PhD',
       },
       {
         col1: 'Stark, Anthony',
         col2: 'MS',
       },
       {
         col1: 'Nelson, Kent',
         col2: 'BA',
       },
       {
         col1: 'Parker, Peter',
         col2: 'PhD',
       },
       {
         col1: 'Omega, Kenny',
         col2: 'BS',
       },
       {
         col1: 'Wilson, Sam',
         col2: 'MS',
       },
       {
         col1: 'Naito, Tetsuya',
         col2: 'BA',
       },
       {
         col1: 'Sakurai, Masahiro',
         col2: 'BS',
       },
       {
         col1: 'Reyes, Jaime',
         col2: 'BS',
       },
       {
         col1: 'Steve',
         col2: 'MS',
       },
       {
         col1: 'Hedgehog, Sonic the',
         col2: 'PhD',
       },
       {
         col1: 'Odinsdottir, Angela',
         col2: 'BA',
       }
     ],
     []
   )
 
   const columns = React.useMemo(
     () => [
       {
         Header: 'Name',
         accessor: 'col1', // accessor is the "key" in the data,
	 Filter: DefaultColumnFilter
       },
       {
         Header: 'Degree',
         accessor: 'col2',
	 Filter: SelectColumnFilter
       },
     ],
     []
   )
 
   return (
     <Table columns={columns} data={data} /> 
   )
 }

export default AnalyticsTable