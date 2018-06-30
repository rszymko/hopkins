class CreateAuthorships < ActiveRecord::Migration[5.1]
  def change
    create_table :authorships do |t|
      t.integer :author_id
      t.integer :book_id

      t.timestamps
    end
  end
end
