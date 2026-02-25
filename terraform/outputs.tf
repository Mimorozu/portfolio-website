output "website_url" {
  value = azurerm_storage_account.main.primary_web_endpoint
}

output "storage_account_name" {
  value = azurerm_storage_account.main.name
}