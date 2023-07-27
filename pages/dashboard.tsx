import type { NextPage } from "next";
import { useState, useEffect } from 'react';
import { IProduct } from "../Models/IProduct";
import { ProductService } from "../Services/ProductService";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
// import Container from "../components/Container";

interface IState {
    loading: boolean,
    products: IProduct[],
    errorMsg: string
}

const Dashboard: NextPage = () => {
    const [product, setProducts] = useState<IState>({
        loading: false, products: [] as IProduct[], errorMsg: ""
    });

    useEffect(() => {
        debugger
        setProducts({ ...product, loading: true })
        ProductService.getAllProducts().then(
            (res) => setProducts({ ...product, loading: false, products: res.data.products })
        ).catch(err => setProducts({
            ...product, loading: false, errorMsg: err.message
        }));

    }, [])
    const { loading, products, errorMsg } = product;
    return (

        <div>
            <h1>Product List</h1>
            {errorMsg && (<p> {errorMsg}</p>)}
            {loading && <h1>Loading...</h1>}

            <TableContainer>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">Title</TableCell>
                            <TableCell align="center">Description</TableCell>
                            <TableCell align="center">Price</TableCell>
                            <TableCell align="center">Category</TableCell>
                            <TableCell align="center">Brand</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            products.length > 0 && products.map((product: any) => (
                                <TableRow
                                    key={product.id}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell>{product.title}</TableCell>
                                    <TableCell>{product.description}</TableCell>
                                    <TableCell>{product.price}</TableCell>
                                    <TableCell>{product.category}</TableCell>
                                    <TableCell>{product.brand}</TableCell>
                                </TableRow>

                                // <tr key={product.id}>
                                //     <td>{product.title}</td>
                                //     <td>{product.description}</td>
                                //     <td>{product.price}</td>
                                //     {/* <td>{product.discountPercentage}</td>
                                //     <td>{product.rating}</td>
                                //     <td>{product.stock}</td>
                                //     <td>{product.brand}</td>
                                //     <td>{product.category}</td> */}
                                // </tr>

                            ))
                        }
                    </TableBody>
                </Table>
            </TableContainer>
            {/* <table>
                <thead>
                    <td>Title</td>
                    <td>Description</td>
                    <td>Price</td>
                    {/* <td>discountPercentage</td>
                    <td>rating</td>
                    <td>stock</td>
                    <td>brand</td>
                    <td>category</td> *
                </thead>
                <tbody>
                    {
                        products.length > 0 && products.map((product: any) => (
                            <tr key={product.id}>
                                <td>{product.title}</td>
                                <td>{product.description}</td>
                                <td>{product.price}</td>
                                {/* <td>{product.discountPercentage}</td>
                                <td>{product.rating}</td>
                                <td>{product.stock}</td>
                                <td>{product.brand}</td>
                                <td>{product.category}</td> 
                            </tr>

                        ))
                    }
                </tbody>
            </table> */}

        </div>

    );
};

export default Dashboard;
