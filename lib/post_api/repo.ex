defmodule PostApi.Repo do
  use Ecto.Repo,
    otp_app: :post_api,
    adapter: Ecto.Adapters.SQLite3
end
