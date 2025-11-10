use [northwind]

SELECT 
    c.CompanyName AS Customer,
    e.FirstName + ' ' + e.LastName AS Salesperson,
    COUNT(o.OrderID) AS TotalOrders,
    SUM(od.Quantity * od.UnitPrice * (1 - od.Discount)) AS TotalSales,
    YEAR(o.OrderDate) AS OrderYear
FROM Orders AS o
INNER JOIN Customers AS c
    ON o.CustomerID = c.CustomerID
INNER JOIN Employees AS e
    ON o.EmployeeID = e.EmployeeID
INNER JOIN [Order Details] AS od
    ON o.OrderID = od.OrderID
INNER JOIN Shippers AS s
    ON o.ShipVia = s.ShipperID
WHERE 
    o.OrderDate BETWEEN '1997-01-01' AND '1997-12-31'
    AND c.Country IN ('USA', 'UK', 'Germany')
GROUP BY 
    c.CompanyName,
    e.FirstName,
    e.LastName,
    YEAR(o.OrderDate)
HAVING 
    SUM(od.Quantity * od.UnitPrice * (1 - od.Discount)) > 10000
ORDER BY 
    TotalSales DESC;
