class CreateVersions < ActiveRecord::Migration
  def self.up
    create_table :versions do |t|
      t.integer :fileid
      t.text :change
      t.integer :revision

      t.timestamps
    end
  end

  def self.down
    drop_table :versions
  end
end
