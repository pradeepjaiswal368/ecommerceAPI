select Distinct Name from salesperson, orders 
where salesperson.ID = orders.salesperson_id 
And orders.Amount > 1400

